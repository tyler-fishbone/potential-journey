class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        loop through array and have a nested loop goes though all the remaining digits
        
        """
        # O(n**2) Time
        # O(n)
        # for i in range(len(nums)):
        #     for j in range(i + 1, len(nums)):
        #         if nums[i] + nums[j] == target:
        #             return [i,j]
        # return None

        # faster solution O(n), O(2n) space
        # initialize a hash table, loop through array once and for each element, check whether complement is in hash table, if so, return, if not, add it to the hash table with it's index as the value
        myDict = {}
        for index, i in enumerate(nums):
            complement = target - i
            print(i, complement, target)
            if complement in myDict:
                return [myDict[complement], index]
            myDict[i] = index
            