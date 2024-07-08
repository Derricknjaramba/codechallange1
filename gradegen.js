// student-grade-generator.js

/**
 * Function to calculate the grade based on student marks.
 * @param {number} mark - The student's mark (between 0 and 100).
 * @returns {string} - Corresponding grade (A, B, C, D, E).
 */
function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

// Example usage (uncomment to test)
/*
const inputMark = 75;
const grade = calculateGrade(inputMark);
console.log(`Grade: ${grade}`);
*/

// Export the function if needed
// module.exports = calculateGrade;
