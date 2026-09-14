// brute force solution method

const maxProfit = function(prices){
    let globalProfit = 0 ;
    for (let i = 0; i < prices.length-1 ; i++) {
     for (let j = 0 +1 ; j < prices.length ; j++) {
        const curProfit = prices[j]-prices[i];
        if ( curProfit > globalProfit ) globalProfit=curProfit;    
    }
         }
    return globalProfit;
}
console.log(maxProfit([7, 1, 5, 3 ,6 ,4]));
