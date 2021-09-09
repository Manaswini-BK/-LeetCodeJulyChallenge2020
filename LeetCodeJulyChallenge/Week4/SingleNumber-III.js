/*Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

Example:

Input:  [1,2,1,3,2,5]
Output: [3,5]
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let len = nums.length;
    if(len===0)
        return [0,0];
    let hashEle = {};
    let res = [];
    for(let i=0; i<len; i++){
        if(hashEle[nums[i]])
            hashEle[nums[i]]++;
        else
            hashEle[nums[i]] = 1;
    }
    for(let key in hashEle){
        if(hashEle[key] === 1)
            res.push(key);
    }
    if(res.length === 1)
        res.push(0);
    return res;
};