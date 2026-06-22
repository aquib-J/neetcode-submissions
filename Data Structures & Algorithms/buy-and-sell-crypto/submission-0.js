class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    // brute force
    // maxProfit(prices) {
    //     let result=0;
    //     for(let i=0;i<prices.length;i++){
    //         let buy=prices[i];
    //         for(let j=i+1;j<prices.length;j++){
    //             let sell=prices[j];
    //             result=Math.max(result,sell-buy);
    //         }
    //     }
    //     return result;
    // }

    //2ptr
    maxProfit(prices){
        let left=0;
        let right=left+1;
        let profitMax=0;

        while(right<prices.length){
            if(prices[left]<prices[right]){
                profitMax=Math.max(profitMax,prices[right]-prices[left]);
            }else{
                left=right;
            }
            right++;
        }
        return profitMax;
    }
}
