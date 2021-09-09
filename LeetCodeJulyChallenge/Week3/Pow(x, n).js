/*Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:

Input: 2.00000, 10
Output: 1024.00000
Example 2:

Input: 2.10000, 3
Output: 9.26100
Example 3:

Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25 
*/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n < 0){
         x = 1/x;
         n = -n;
     }
 
     let result = 1;
     while(n !== 0){
         if(n % 2 !== 0){
             result = result * x;
         }
         x = x * x;
         n = Math.floor(n / 2);
     }
     return result; 
 };