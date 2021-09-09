/*Given an input string, reverse the string word by word.
Example 1:
Input: "the sky is blue"
Output: "blue is sky the"
Example 2:
Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:
Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let wordArr = s.split(" ");
    let len = wordArr.length;
    let res = '';
    for(let i=0; i<len; i++){
        let word = wordArr.pop();
        if(word != '')
            res = res + " " + word;
    }
    res = res.slice(1);
    return res;
};