// =============================================================================
// READING TEST LOADER - Combines all split reading test files
// Load this AFTER the 4 reading test files
// =============================================================================

// Combine all reading tests into the array that evolve-app.js expects
var READING_TESTS_FULL = [
  ...(typeof READING_FOUNDATION !== 'undefined' ? READING_FOUNDATION : []),
  ...(typeof READING_INTERMEDIATE !== 'undefined' ? READING_INTERMEDIATE : []),
  ...(typeof READING_TESTS_ADVANCED !== 'undefined' ? READING_TESTS_ADVANCED : []),
  ...(typeof READING_TESTS_EXPERT !== 'undefined' ? READING_TESTS_EXPERT : [])
];

console.log('Reading tests loaded:', READING_TESTS_FULL.length, 'tests');
console.log('  - Foundation (R1-R7):', typeof READING_FOUNDATION !== 'undefined' ? READING_FOUNDATION.length : 0);
console.log('  - Intermediate (R8-R13):', typeof READING_INTERMEDIATE !== 'undefined' ? READING_INTERMEDIATE.length : 0);
console.log('  - Advanced (R14-R25):', typeof READING_TESTS_ADVANCED !== 'undefined' ? READING_TESTS_ADVANCED.length : 0);
console.log('  - Expert (R26-R33):', typeof READING_TESTS_EXPERT !== 'undefined' ? READING_TESTS_EXPERT.length : 0);
