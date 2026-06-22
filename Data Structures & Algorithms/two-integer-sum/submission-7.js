class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // naive solution
    // twoSum(nums, target) {
    //     for(let i=0;i<nums.length-1;i++){
    //         for(let j=i+1;j<nums.length;j++){
    //             if(i!=j && nums[i]+nums[j]==target) return [i,j]
    //         }
    //     }
    // }

    // smarter using map/object
    twoSum(nums,target){
        let valueMap=new Map();

        for(let i=0;i<nums.length;i++){
            if(valueMap.has(target-nums[i])){
                return [valueMap.get(target-nums[i]),i];
            }else{
                valueMap.set(nums[i],i)
            }
        }
    }
}
