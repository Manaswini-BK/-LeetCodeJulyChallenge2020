/*Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root)
        return [];
    let res = [];
    let temp = [];
    temp.push(root);
    while(temp.length){
        let addVal = [];
        let size = temp.length;
        for(let i=0; i<size; i++){
            let node = temp.shift();
            addVal.push(node.val);
            if(node.left)
                temp.push(node.left);
            if(node.right)
                temp.push(node.right);
        }
        res.unshift(addVal);
    }
    return res;
};