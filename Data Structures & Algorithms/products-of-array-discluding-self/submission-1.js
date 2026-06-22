class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // most naive O(n2) solution
    productExceptSelf(nums) {
        let output=[];
        for(let i=0;i<nums.length;i++){
            for(let j=0;j<nums.length;j++){
                if(i!=j){
                    if(output[i] ==null) output[i]=nums[j];
                    else output[i]*=nums[j];
                }
            }
        }
        return output;
    }
}
