class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        is this case insensitive?
        how do we treat empty strings?
        longest string we would expect
        How to treat spaces? remove
        how to handle non-ascii characters
        two pointers?
        """
        print(s)
        l = 0
        r = len(s) - 1 # index of last char
        isPalindrome = True
        while l < r:
            # print(s[l])
            if not s[l].isalnum():
                l += 1
            elif not s[r].isalnum():
                r -= 1
            elif s[l].lower() == s[r].lower():
                l += 1
                r -= 1
            else:
                isPalindrome = False
                break
                
        return isPalindrome
