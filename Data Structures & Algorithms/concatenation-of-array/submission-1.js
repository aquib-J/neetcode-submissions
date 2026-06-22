class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // getConcatenation(nums) {
    //     let numsLength=nums.length;
    //     for(let i=0;i<numsLength;i++){
    //         nums.push(nums[i]);
    //     }
    //     return nums;
    // }
    
    // Latest effort 19th Jan 2026

    getConcatenation(nums){
        let resultArray=new Array(nums.length*2).fill(0);

        for(let i=0;i<resultArray.length;i++){
            let j=i%nums.length;
            resultArray[i]=nums[j];
        }
        return resultArray;
    }
}
