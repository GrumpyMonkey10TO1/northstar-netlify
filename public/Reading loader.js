// =============================================================================
// READING LOADER - Combines all split reading test files into READING_TESTS_FULL
// Must be loaded AFTER all 4 individual files:
//   - reading_foundation.js (defines READING_FOUNDATION)
//   - reading_intermediate.js (defines READING_INTERMEDIATE)
//   - reading_advanced.js (defines READING_TESTS_ADVANCED)
//   - reading_expert.js (defines READING_TESTS_EXPERT)
// =============================================================================

(function() {
  'use strict';
  
  // Check if all component arrays exist
  // Note: Advanced and Expert files use READING_TESTS_ prefix
  var missing = [];
  
  if (typeof READING_FOUNDATION === 'undefined') missing.push('READING_FOUNDATION');
  if (typeof READING_INTERMEDIATE === 'undefined') missing.push('READING_INTERMEDIATE');
  if (typeof READING_TESTS_ADVANCED === 'undefined') missing.push('READING_TESTS_ADVANCED');
  if (typeof READING_TESTS_EXPERT === 'undefined') missing.push('READING_TESTS_EXPERT');
  
  if (missing.length > 0) {
    console.error('Reading Loader Error: Missing arrays -', missing.join(', '));
    console.error('Make sure all 4 reading test files are loaded BEFORE Reading_loader.js');
    window.READING_TESTS_FULL = [];
    return;
  }
  
  // Combine all arrays into READING_TESTS_FULL
  window.READING_TESTS_FULL = [].concat(
    READING_FOUNDATION,
    READING_INTERMEDIATE,
    READING_TESTS_ADVANCED,
    READING_TESTS_EXPERT
  );
  
  console.log('Reading Loader: Successfully loaded', window.READING_TESTS_FULL.length, 'tests');
  console.log('  - Foundation (R1-R7):', READING_FOUNDATION.length, 'tests');
  console.log('  - Intermediate (R8-R13):', READING_INTERMEDIATE.length, 'tests');
  console.log('  - Advanced (R14-R25):', READING_TESTS_ADVANCED.length, 'tests');
  console.log('  - Expert (R26-R33):', READING_TESTS_EXPERT.length, 'tests');
})();
