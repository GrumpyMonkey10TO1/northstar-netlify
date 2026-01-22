import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Strip meta-comments about band levels
function cleanEssayText(text) {
  return text
    .replace(/here is a band \d[^.]*\./gi, '')
    .replace(/this is a band \d[^.]*\./gi, '')
    .replace(/this is (roughly|approximately|about) band \d[^.]*\./gi, '')
    .replace(/band \d[\-–]\d level[^.]*\./gi, '')
    .replace(/band \d\+? (level )?(response|essay|answer)[^.]*\./gi, '')
    .replace(/deliberately weak[^.]*\./gi, '')
    .replace(/failing[- ]level[^.]*\./gi, '')
    .replace(/^\s*below is[^.]*\.\s*/gi, '')
    .trim();
}

// ============ ALGORITHMIC PRE-SCORING ============
// This establishes score CAPS before AI assessment

// Basic vocabulary that indicates Band 5 level
const BASIC_VOCABULARY = new Set([
  'good', 'bad', 'very', 'many', 'some', 'thing', 'things', 'lot', 'lots',
  'nice', 'big', 'small', 'important', 'people', 'think', 'say', 'said',
  'make', 'made', 'get', 'got', 'use', 'used', 'help', 'helps', 'want',
  'need', 'like', 'also', 'because', 'so', 'but', 'and', 'really', 'nowadays'
]);

// Advanced vocabulary indicators for Band 7+
const ADVANCED_VOCABULARY = new Set([
  'furthermore', 'moreover', 'nevertheless', 'consequently', 'significantly',
  'predominantly', 'substantially', 'inherently', 'fundamentally', 'arguably',
  'compelling', 'detrimental', 'beneficial', 'facilitate', 'exacerbate',
  'mitigate', 'unprecedented', 'contemporary', 'profound', 'substantial',
  'inadequate', 'indispensable', 'inevitable', 'controversial', 'comprehensive',
  'phenomenon', 'perspective', 'implications', 'consideration', 'enhancement',
  'deterioration', 'proliferation', 'transformation', 'implementation'
]);

function analyzeVocabulary(text) {
  const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
  const uniqueWords = new Set(words);
  const totalWords = words.length;
  
  // Count basic vs advanced words
  let basicCount = 0;
  let advancedCount = 0;
  
  words.forEach(word => {
    if (BASIC_VOCABULARY.has(word)) basicCount++;
    if (ADVANCED_VOCABULARY.has(word)) advancedCount++;
  });
  
  const basicRatio = basicCount / totalWords;
  const advancedRatio = advancedCount / totalWords;
  const lexicalDiversity = uniqueWords.size / totalWords;
  
  return {
    totalWords,
    uniqueWords: uniqueWords.size,
    basicCount,
    advancedCount,
    basicRatio,
    advancedRatio,
    lexicalDiversity
  };
}

function analyzeSentences(text) {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const totalSentences = sentences.length;
  
  // Check for complex structures
  const complexIndicators = [
    /\b(although|though|while|whereas|despite|in spite of)\b/i,
    /\b(however|nevertheless|nonetheless|consequently|therefore)\b/i,
    /\b(which|who|whom|whose|that)\b.*\b(is|are|was|were|has|have)\b/i,
    /\b(if|unless|provided that|as long as)\b/i,
    /\b(not only|either|neither|whether)\b/i
  ];
  
  let complexCount = 0;
  sentences.forEach(sentence => {
    if (complexIndicators.some(pattern => pattern.test(sentence))) {
      complexCount++;
    }
  });
  
  // Average sentence length
  const avgLength = text.split(/\s+/).length / totalSentences;
  
  return {
    totalSentences,
    complexCount,
    complexRatio: complexCount / totalSentences,
    avgSentenceLength: avgLength
  };
}

function calculateScoreCaps(wordCount, vocabAnalysis, sentenceAnalysis) {
  let maxScore = 8.5;
  let minScore = 4.0;
  let signals = [];
  
  // Word count penalties
  if (wordCount < 200) {
    maxScore = Math.min(maxScore, 5.0);
    signals.push("Severely under word count (<200)");
  } else if (wordCount < 250) {
    maxScore = Math.min(maxScore, 5.5);
    signals.push("Under minimum word count (<250)");
  }
  
  // Vocabulary analysis
  if (vocabAnalysis.basicRatio > 0.25) {
    maxScore = Math.min(maxScore, 5.5);
    signals.push("High basic vocabulary ratio (>25%)");
  } else if (vocabAnalysis.basicRatio > 0.18) {
    maxScore = Math.min(maxScore, 6.0);
    signals.push("Moderate basic vocabulary ratio (>18%)");
  }
  
  if (vocabAnalysis.advancedRatio > 0.03) {
    minScore = Math.max(minScore, 6.5);
    signals.push("Good advanced vocabulary usage (>3%)");
  }
  if (vocabAnalysis.advancedRatio > 0.05) {
    minScore = Math.max(minScore, 7.0);
    signals.push("Strong advanced vocabulary usage (>5%)");
  }
  
  // Lexical diversity
  if (vocabAnalysis.lexicalDiversity < 0.45) {
    maxScore = Math.min(maxScore, 5.5);
    signals.push("Low lexical diversity (<45%)");
  } else if (vocabAnalysis.lexicalDiversity < 0.55) {
    maxScore = Math.min(maxScore, 6.5);
    signals.push("Moderate lexical diversity (<55%)");
  }
  
  // Sentence complexity
  if (sentenceAnalysis.complexRatio < 0.15) {
    maxScore = Math.min(maxScore, 5.5);
    signals.push("Very few complex sentences (<15%)");
  } else if (sentenceAnalysis.complexRatio < 0.25) {
    maxScore = Math.min(maxScore, 6.5);
    signals.push("Limited complex sentences (<25%)");
  } else if (sentenceAnalysis.complexRatio > 0.4) {
    minScore = Math.max(minScore, 6.5);
    signals.push("Good sentence variety (>40% complex)");
  }
  
  return { maxScore, minScore, signals };
}

// ============ MAIN HANDLER ============

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: ""
    };
  }

  try {
    const { email, testId, prompt, answer, timeSpent, meta } = JSON.parse(event.body || "{}");

    if (!email || !testId || !prompt || !answer) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Missing required fields" })
      };
    }

    const cleanedAnswer = cleanEssayText(answer);
    const wordCount = cleanedAnswer.trim().split(/\s+/).filter(w => w.length > 0).length;
    
    // ============ ALGORITHMIC PRE-ANALYSIS ============
    const vocabAnalysis = analyzeVocabulary(cleanedAnswer);
    const sentenceAnalysis = analyzeSentences(cleanedAnswer);
    const scoreCaps = calculateScoreCaps(wordCount, vocabAnalysis, sentenceAnalysis);
    
    console.log("Pre-analysis:", { 
      wordCount, 
      vocabAnalysis, 
      sentenceAnalysis, 
      scoreCaps 
    });

    // ============ AI SCORING WITH CAPS ============
    const scoringPrompt = `You are an IELTS Writing Task 2 examiner.

ESSAY PROMPT: ${prompt}

STUDENT'S ESSAY (${wordCount} words):
${cleanedAnswer}

=== PRE-ANALYSIS RESULTS ===
Based on algorithmic analysis, this essay has:
- Basic vocabulary ratio: ${(vocabAnalysis.basicRatio * 100).toFixed(1)}%
- Advanced vocabulary count: ${vocabAnalysis.advancedCount}
- Lexical diversity: ${(vocabAnalysis.lexicalDiversity * 100).toFixed(1)}%
- Complex sentence ratio: ${(sentenceAnalysis.complexRatio * 100).toFixed(1)}%
- Signals: ${scoreCaps.signals.join('; ') || 'None'}

SCORING CONSTRAINTS (you MUST follow these):
- Maximum possible score: ${scoreCaps.maxScore}
- Minimum possible score: ${scoreCaps.minScore}

=== BAND DESCRIPTORS ===
Band 5: Limited vocabulary, simple/repetitive structures, ideas underdeveloped, may be under word count
Band 6: Adequate but restricted vocabulary, position present but may be unclear, mix of simple/complex sentences  
Band 7: Good vocabulary with less common items, clear position, varied complex structures
Band 8: Sophisticated vocabulary, precise meanings, wide range of accurate complex structures

Score this essay within the constraints above. Return ONLY this JSON:
{
  "scores": {
    "task": ${scoreCaps.minScore}-${scoreCaps.maxScore},
    "coherence": ${scoreCaps.minScore}-${scoreCaps.maxScore},
    "lexical": ${scoreCaps.minScore}-${scoreCaps.maxScore},
    "grammar": ${scoreCaps.minScore}-${scoreCaps.maxScore},
    "overall": ${scoreCaps.minScore}-${scoreCaps.maxScore}
  },
  "feedback": {
    "task": "one sentence",
    "coherence": "one sentence", 
    "lexical": "one sentence",
    "grammar": "one sentence"
  },
  "strengths": ["strength 1", "strength 2"],
  "improvements": ["improvement 1", "improvement 2"],
  "next_focus": "most important thing to practice",
  "band_summary": "one sentence summary"
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { 
          role: "system", 
          content: `You are an IELTS examiner. You MUST score within the given constraints: min ${scoreCaps.minScore}, max ${scoreCaps.maxScore}. Any score outside this range is INVALID. Respond with valid JSON only.`
        },
        { role: "user", content: scoringPrompt }
      ],
      temperature: 0.2,
      max_tokens: 1000
    });

    let result;
    try {
      const responseText = completion.choices[0].message.content.trim();
      const jsonText = responseText.replace(/```json\n?|\n?```/g, '').trim();
      result = JSON.parse(jsonText);
      
      // ENFORCE CAPS - override AI if it ignores constraints
      if (result.scores) {
        ['task', 'coherence', 'lexical', 'grammar', 'overall'].forEach(key => {
          if (result.scores[key] > scoreCaps.maxScore) {
            result.scores[key] = scoreCaps.maxScore;
          }
          if (result.scores[key] < scoreCaps.minScore) {
            result.scores[key] = scoreCaps.minScore;
          }
        });
        
        // Recalculate overall as average
        result.scores.overall = Math.round(
          (result.scores.task + result.scores.coherence + result.scores.lexical + result.scores.grammar) / 4 * 2
        ) / 2;
        
        // Flatten for compatibility
        result.task = result.scores.task;
        result.coherence = result.scores.coherence;
        result.lexical = result.scores.lexical;
        result.grammar = result.scores.grammar;
        result.overall = result.scores.overall;
      }
    } catch (parseError) {
      console.error("Parse error, using algorithmic fallback:", parseError.message);
      // Fallback to pure algorithmic score
      const fallbackScore = (scoreCaps.maxScore + scoreCaps.minScore) / 2;
      result = {
        scores: { 
          task: fallbackScore, 
          coherence: fallbackScore, 
          lexical: fallbackScore, 
          grammar: fallbackScore, 
          overall: fallbackScore 
        },
        feedback: { 
          task: "Essay addresses the topic.", 
          coherence: "Some organization present.", 
          lexical: scoreCaps.maxScore <= 5.5 ? "Vocabulary is basic and repetitive." : "Adequate vocabulary range.",
          grammar: "Mix of sentence structures."
        },
        strengths: ["Attempted all parts of the task"],
        improvements: ["Expand vocabulary range", "Use more complex sentence structures"],
        next_focus: "Build academic vocabulary",
        band_summary: `Essay demonstrates Band ${fallbackScore} level writing.`
      };
    }

    // Add analysis metadata
    result.wordCount = wordCount;
    result.timeSpent = timeSpent || 0;
    result.testId = testId;
    result._analysis = {
      vocabAnalysis,
      sentenceAnalysis,
      scoreCaps
    };

    // Save to database
    try {
      await supabase.from("user_test_results").insert({
        email: email.toLowerCase(),
        product: "evolve",
        test_id: testId,
        test_type: meta?.type || "writing",
        level: meta?.level || null,
        overall: result.scores?.overall ?? result.overall ?? null,
        task: result.scores?.task ?? result.task ?? null,
        coherence: result.scores?.coherence ?? result.coherence ?? null,
        lexical: result.scores?.lexical ?? result.lexical ?? null,
        grammar: result.scores?.grammar ?? result.grammar ?? null,
        feedback: result,
        answer: answer
      });
    } catch (dbError) {
      console.log("Database save skipped:", dbError.message);
    }

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(result)
    };

  } catch (err) {
    console.error("Scoring error:", err.message);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Scoring failed: " + err.message })
    };
  }
}
