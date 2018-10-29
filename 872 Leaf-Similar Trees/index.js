/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let [arr1, arr2] = [[], []];
    help(root1, arr1);
    help(root2, arr2);

    let temp1 = arr1.join('');
    let temp2 = arr2.join('');

    return temp1 === temp2;
};

function help (root, arr) {
    if (root === null) {
        return;
    }

    if (root.left === null && root.right === null) {
        arr.push(root.val);
    }

    help(root.left, arr);
    help(root.right, arr);
}