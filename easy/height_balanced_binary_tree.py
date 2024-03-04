# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        depth first search, keep track of a height on
        """
        
        result = self.dfs(root)
        return result[0]

    def dfs(self, root): # -> [balanced: bool, height: int]
        if not root: return [True, 0]
        left, right = self.dfs(root.left), self.dfs(root.right)
        balanced = (left[0] and right[0] and abs(left[1] - right[1] <= 1))

        return [balanced, 1 + max(left[1], right[1])]
# time O(n) because it only visits each node once
# space O(1), doesn't add any more data
    # maybe worth doing over again
