/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let arr = [];
    help(root, arr);
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1].right = arr[i];
    }
    return arr[0];
};

function help (node, arr) {
    if (node === null) {
        return;
    }

    help(node.left, arr);

    arr.push(new TreeNode(node.val));

    help(node.right, arr);
}