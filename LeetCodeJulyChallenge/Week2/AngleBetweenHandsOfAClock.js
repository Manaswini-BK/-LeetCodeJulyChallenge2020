/*Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.
Example 1:
Input: hour = 12, minutes = 30
Output: 165

Example 2:
Input: hour = 3, minutes = 30
Output: 75
 */
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    //Degree(hour) = H * (360/12) + (M * 360)/(12 * 60)
    //Degree(mins) = M * (360/60)
    let hourHandAngle = 30 * (hour % 12) + minutes / 2;
    let minuteHandAngle = 6 * minutes;
	let angle = Math.abs(hourHandAngle - minuteHandAngle)
    return Math.min(angle, 360 - angle);
};