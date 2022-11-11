/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// const node = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))))
// const node = new TreeNode(1, new TreeNode(2));
const node = new TreeNode(0, new TreeNode(1), new TreeNode(1));
console.log('node:', node)

var hasPathSum = function (root, targetSum) {
    if (!root || root.val === null) {
        return false;
    }

    const treeTraversal = (tempRoot, sum) => {
        let tempSum = tempRoot.val + sum;

        if (tempRoot.left && treeTraversal(tempRoot.left, tempSum)) {
            return true
        }

        if (tempRoot.right && treeTraversal(tempRoot.right, tempSum)) {
            return true;
        }

        return (tempRoot.left || tempRoot.right) ? false : targetSum === tempSum;
    }

    return treeTraversal(root, 0);
};


const res = hasPathSum(node, 1)

console.log('res:', res);