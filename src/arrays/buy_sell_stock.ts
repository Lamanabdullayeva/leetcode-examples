function maxProfit(prices: number[]): number {
    let minNumber = Infinity;
    let maxProfit = 0;

    for (let price of prices){
        if (price < minNumber){
            minNumber = price;
        } else {
           maxProfit = Math.max(maxProfit, price - minNumber)
        }
    }
    return maxProfit
};