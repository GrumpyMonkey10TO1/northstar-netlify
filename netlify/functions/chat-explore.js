// ===  North Star GPS  –  WhatsApp-style, CRS-estimator, tier-aware  ===
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
let conversationHistory = [];

const openers = ["Got it.","Sure thing.","Makes sense.","Quick take:"];
const closers = ["That’s the gist—want next steps?","Hope that clears it up 🤘","Shoot if you need the deep dive."];
const rand = arr => arr[Math.floor(Math.random() * arr.length)];

function quickCRS({age, edu, ielts, work, spouse=false}){
  let core = 0;
  if(age>=18&&age<=29) core+=110; else if(age<=35) core+=95; else if(age<=40) core+=85; else if(age<=45) core+=75;
  if(edu==="master") core+=135; else if(edu==="bachelor") core+=120; else if(edu==="phd") core+=150;
  const clb = ielts==="9" ? 31 : ielts==="8" ? 23 : ielts==="7" ? 17 : 9;
  core += (clb*4);
  const yrs = parseInt(work,10)||0;
  if(yrs>=3) core+=50; else if(yrs>=1) core+=40;
  if(spouse) core+=10;
  return core + 50;   // buffer
}

export async function handler(event){
  if(event.httpMethod==="OPTIONS") return {statusCode:200,headers:corsHeaders(),body:"OK"};
  if(event.httpMethod!=="POST") return {statusCode:405,headers:corsHeaders(),body:JSON.stringify({error:"Method not allowed"})};

  try{
    const body = JSON.parse(event.body||"{}");
    const userMessage = (body.message||"").trim();
    if(!userMessage) return {statusCode:400,headers:corsHeaders(),body:JSON.stringify({error:"Missing message"})};

    /* ----  quick CRS when numbers detected  ---- */
    const crsMatch=userMessage.match(/(\d+).*(master|bachelor|phd|diploma).*(\d)\s*years?.*(clb\s?(\d)|ielts\s?(\d))/i);
    if(crsMatch){
      const [_,age,edu,work,_,ielts]=crsMatch;
      const est=quickCRS({age,edu,ielts,work});
      const lastDraw=481; // update weekly
      const reply=`${rand(openers)}\nRough CRS: ~${est} (${est-50} without spouse).\nLast draw: ${lastDraw}. You’d need CLB 9 or PNP push—want the fastest route?\n${rand(closers)}`;
      conversationHistory.push({role:"user",content:userMessage},{role:"assistant",content:reply});
      return {statusCode:200,headers:corsHeaders(),body:JSON.stringify({reply})};
    }

    /* ----  normal GPT call  ---- */
    const systemPrompt=`You are North Star GPS, Ovi Matin’s (RCIC R712582) WhatsApp-style assistant.
1. Answer in 2-3 short sentences, contractions, line-breaks like voice notes.
2. If user gives age+edu+ielts+work (+spouse?) give instant CRS estimate first.
3. Offer next step, never hard-sell.
4. Off-topic → “That’s outside immigration land—shoot if you veer back 😊”
5. Start with: ${rand(openers)}  End with: ${rand(closers)}`;

    const messages=[
      {role:"system",content:systemPrompt},
      ...conversationHistory.slice(-6),
      {role:"user",content:userMessage}
    ];

    const completion=await client.chat.completions.create({
      model:"gpt-4o-mini",
      temperature:0.8,
      max_tokens:320,
      messages
    });

    let reply=completion.choices?.[0]?.message?.content?.trim()||"Hmm, try again?";
    reply=`${rand(openers)}\n${reply}\n${rand(closers)}`;

    conversationHistory.push({role:"user",content:userMessage},{role:"assistant",content:reply});
    if(conversationHistory.length>20) conversationHistory=conversationHistory.slice(-20);

    return {statusCode:200,headers:corsHeaders(),body:JSON.stringify({reply})};

  }catch(err){
    console.error("❌ Explore bot error:",err);
    return {statusCode:500,headers:corsHeaders(),body:JSON.stringify({error:err.message})};
  }
}

function corsHeaders(){
  return{
    "Access-Control-Allow-Origin":"https://migratenorth.ca",
    "Access-Control-Allow-Methods":"GET, POST, OPTIONS",
    "Access-Control-Allow-Headers":"Content-Type",
    "Content-Type":"application/json"
  };
}
