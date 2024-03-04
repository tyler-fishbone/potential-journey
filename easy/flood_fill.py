class Solution(object):
    def floodFill(self, image, sr, sc, color):
        """
        :type image: List[List[int]]
        :type sr: int
        :type sc: int
        :type color: int
        :rtype: List[List[int]]
        # used this guys youtube to learn this algo: https://www.youtube.com/watch?v=aehEcTEPtCs&ab_channel=NickWhite
        """
        if image[sr][sc] == color: return image # if already color return
        self.fill(image, sr, sc, image[sr][sc], color)
        return image
    
    def fill(self, image, sr, sc, oldColor, color):
        if (sr < 0 or sc < 0 or sr >= len(image) or sc >= len(image[0]) or image[sr][sc] != oldColor):
            return
        image[sr][sc] = color
        self.fill(image, sr-1, sc, oldColor, color)
        self.fill(image, sr+1, sc, oldColor, color)
        self.fill(image, sr, sc-1, oldColor, color)
        self.fill(image, sr, sc+1, oldColor, color)
