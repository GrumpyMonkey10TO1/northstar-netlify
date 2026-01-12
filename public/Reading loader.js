// =============================================================================
// READING LOADER - Combines all split reading test files into READING_TESTS_FULL
// Must be loaded AFTER all 4 individual files
// =============================================================================

(function() {
  'use strict';
  
  // Check if all component arrays exist
  var missing = [];
  
  if (typeof READING_FOUNDATION === 'undefined') missing.push('READING_FOUNDATION');
  if (typeof READING_INTERMEDIATE === 'undefined') missing.push('READING_INTERMEDIATE');
  if (typeof READING_ADVANCED === 'undefined') missing.push('READING_ADVANCED');
  if (typeof READING_EXPERT === 'undefined') missing.push('READING_EXPERT');
  
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
    READING_ADVANCED,
    READING_EXPERT
  );
  
  console.log('Reading Loader: Successfully loaded', window.READING_TESTS_FULL.length, 'tests');
  console.log('  - Foundation (R1-R7):', READING_FOUNDATION.length, 'tests');
  console.log('  - Intermediate (R8-R13):', READING_INTERMEDIATE.length, 'tests');
  console.log('  - Advanced (R14-R25):', READING_ADVANCED.length, 'tests');
  console.log('  - Expert (R26-R33):', READING_EXPERT.length, 'tests');
})();
