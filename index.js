// Toy Problems Week 1 Solutions

// Challenge 1: Student Grade Generator
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

// Challenge 2: Speed Detector
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerDemerit = 1;

    if (speed <= speedLimit) {
        return 'Ok';
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints >= 12) {
            return 'License suspended';
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}

// Challenge 3: Net Salary Calculator
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

// Extra Practice: Bubble Sort
function bubbleSort(numbers) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] > numbers[i + 1]) {
                const temp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return numbers;
}

// Extra Practice: Staircase Problem
function steps(levels) {
    for (let i = 1; i <= levels; i++) {
        const step = '#'.repeat(i);
        console.log(step);
    }
}

// Extra Practice: Cylinder Volume
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    volume() {
        const pi = Math.PI;
        return (pi * this.radius * this.radius * this.height).toFixed(4);
    }
}

