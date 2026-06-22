class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let numsLength=nums.length;
        for(let i=0;i<numsLength;i++){
            nums.push(nums[i]);
        }
        return nums;
    }
}
