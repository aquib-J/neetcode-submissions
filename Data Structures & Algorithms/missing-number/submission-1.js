class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let productOfRange=0;
        let productOfNums=nums.reduce((a,c)=>a^c);
        for(let i=1;i<=nums.length;i++){
            productOfRange^=i;
        }
        return productOfRange^productOfNums;
    }
}
