class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        anagram = nagaram
        rat != car
        Qs - why type of char, case sensitivity matters?
        idea 1, sort each one and then see if they're equal
        check length for easy False
        
        """
        # if len(t) != len(s): # make sure lengths are equal
        #     return False
        
        # sorted_s = "".join(sorted(s))
        # sorted_t = "".join(sorted(t))
        # return sorted_s == sorted_t
        # #time  O(nlogn)
        # #space = On
    

        if len(t) != len(s): # make sure lengths are equal
            return False
        count = defaultdict(int) # default dict here make the default val for any key 0
        for x in s:
            count[x] += 1
        for x in t:
            count[x] -= 1
        for x in count.values():
            if x != 0:
                return False
        return True
    # time O(n)
    # space O(n)