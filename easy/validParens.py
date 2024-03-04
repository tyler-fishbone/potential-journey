class Solution(object):
    def isValid(self, s):
        """
        https://leetcode.com/problems/valid-parentheses/
        """
        stack = []
        for char in s:
            if char in '({[':
                stack.append(char)
            else:
                if len(stack) == 0:
                    print('invalid list, encountered closer with no opener', char)
                    return False
                top = stack[-1]
                if top == "(" and char == ")" \
                or top == "{" and char == "}" \
                or top == "[" and char == "]":
                    stack.pop()
                else:
                    print('invalid list, encountered closer with no opener', char)
                    return False
        if stack: 
            return False # if anything's left after looping through return false
        return True
        # O(n) time
        # O(n) space