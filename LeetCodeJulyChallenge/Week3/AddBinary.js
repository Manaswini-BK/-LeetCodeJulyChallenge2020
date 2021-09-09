/*Given two binary strings, return their sum (also a binary string).
The input strings are both non-empty and contains only characters 1 or 0.
Example 1:
Input: a = "11", b = "1"
Output: "100"
Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let index1 = a.length;
    let index2 = b.length;
    let result = '';
    let carry = 0;
    while (index1 || index2) {
        let sum = (index1 > 0 ? +a[--index1] : 0) + (index2 > 0 ? +b[--index2] : 0) + carry;
        result = (sum % 2) + result;
        carry = sum > 1 ? 1 : 0;
    };
    return carry ? carry + result : result;
};