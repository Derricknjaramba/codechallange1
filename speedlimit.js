// speed-detector.js

/**
 * Function to check the speed of a car and determine demerit points.
 * @param {number} speed - The speed of the car in km/h.
 * @returns {string} - "Ok" if speed is less than 70, or "Points: x" if above, or "License suspended".
 */
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

// Example usage (uncomment to test)
/*
const inputSpeed = 80;
const result = checkSpeed(inputSpeed);
console.log(result);
*/

// Export the function if needed
// module.exports = checkSpeed;
