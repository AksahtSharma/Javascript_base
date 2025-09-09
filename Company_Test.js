/* You are given an array of integers, where each element represents the price of a stock on a 
particular day. Your task is to find the maximum profit that can be achieved by buying and 
selling the stock multiple times. 
You can only buy stock if its price is less than the price on the next day. You can sell the stock at 
any subsequent day to maximize your profit. Just make sure to make a profit with each 
transaction  */




function maxProfit(prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }

    return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
