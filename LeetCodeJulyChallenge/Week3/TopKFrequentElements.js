/*Given a non-empty array of integers, return the k most frequent elements.
Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:
Input: nums = [1], k = 1
Output: [1]
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let len = nums.length;
    if(len === 1)
        return nums;
    let hashEle = {};
    let res = [];
    for(let i=0; i<len; i++){
        let num = nums[i];
        if(hashEle[num])
            hashEle[num]++;
        else
            hashEle[num] = 1;
    }
    let sortedKeys = Object.keys(hashEle).sort(function(a,b){return hashEle[b]-hashEle[a]})
    return sortedKeys.slice(0,k);

};