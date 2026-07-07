class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let output=[]
        for(let i=0;i<2*nums.length;i++){
            output.push(nums[i%nums.length])
        }
        return output
    }
}
