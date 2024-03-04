class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        basically implement binary search

        get middle number index
        is that number, if greater take array lower, if lower take subarray higher
        recursion?
        try using two pointers and a for loop instead, while low >= high
        """

        low = 0
        high = len(nums) - 1
        midway = len(nums) // 2
        
        while low <= high:
            if nums[midway] == target:
                return midway
            elif nums[midway] > target:
                high = midway - 1
                midway = (high + low) // 2
            else: # nums[midway] < target:
                low = midway + 1
                midway = (high + low) // 2
        
        return -1
        # time O(nlogn)
        # space O(1)