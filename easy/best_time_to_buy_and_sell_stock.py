class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        no days possible? return zero
        high pointer and low pointer
        Two Pointers
        """

        l, r = 0, 1 # left = buy, right=sell
        maxP = 0

        while r < len(prices):
            if prices[l] < prices[r]:
                profit = prices[r] - prices[l]
                maxP = max(maxP, profit)
            else:
                l = r
            r += 1
        
        return maxP
        # O(1) Space/Memory
        # O(n) Time

        """
        Note: at first I was confused because I didn't understand how the profit
        would be preserved if we encountered a new minimum later after finding 5.
        But maxP and the max() function work to hold onto the maximum for the whole time.
        If we wanted to preserve the indexes of the max and min we wouldn't use max() but
        an if statement which would then take note of the max coordinates.
        """
        






        # min_price = prices[0]
        # max_profit = 0

        # for price in prices:
        #     min_price = min(min_price, price)
        #     max_profit = max(max_profit, price - min_price)

        # return max_profit
                # this works but runtime isn't as good, also harder to understand IMO