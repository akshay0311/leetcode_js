/**
 * @param {number[]} prices
 * @return {number}
 */
const prices = [7,1,5,3,6,4];

var maxProfit = function(prices) {
    let smallestTillNow = prices[0];
    let max_profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if ((prices[i] - smallestTillNow) > max_profit)
            max_profit = prices[i] - smallestTillNow;
        if (prices[i] < smallestTillNow) 
            smallestTillNow = prices[i];
    }
    return max_profit
};

let ans = maxProfit(prices);
console.log(ans);