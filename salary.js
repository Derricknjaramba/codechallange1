// net-salary-calculator.js

/**
 * Function to calculate net salary based on basic salary and benefits.
 * @param {number} basicSalary - The basic salary amount.
 * @param {number} benefits - The benefits amount.
 * @returns {object} - Object with gross salary, deductions, and net salary details.
 */
function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const taxRate = 0.3; // Example tax rate
    const nhifRate = 0.05; // Example NHIF rate
    const nssfRate = 0.1; // Example NSSF rate

    // Calculations
    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * taxRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    return {
        grossSalary,
        payee,
        nhifDeduction,
        nssfDeduction,
        netSalary
    };
}

// Example usage (uncomment to test)
/*
const basicSalary = 50000;
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log(salaryDetails);
*/

// Export the function if needed
// module.exports = calculateNetSalary;
