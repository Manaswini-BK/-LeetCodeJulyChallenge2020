/*Write a program to find the n-th ugly number.
Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 
Example:
Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
Note:  
1 is typically treated as an ugly number.
n does not exceed 1690.
 */
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  
    let res = [1]
    let i2 = 0;
    let i3 = 0;
    let i5 = 0;
    
    while (res.length<n){
        let m2 = res[i2]*2
        let m3 = res[i3]*3
        let m5 = res[i5]*5
        let temp = Math.min(m2,m3,m5)
        if(temp===m2){
            i2++;
        }
        if(temp===m3){
            i3++;
        }
        if(temp===m5){
            i5++;
        }
        res.push(temp);
    }

    return res[n-1];
};
