class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // Most naive solution
    _twoSum(nums, target) {
        for(let i=0;i<nums.length;i++){
            for(let j=0;j<nums.length;j++){
                if(i!==j && (nums[i]+nums[j])==target){
                     if(i<j) return [i,j];
                     else return [j,i];
                }
            }
        }
    }
    
    twoSum(nums,target){
        let diffMap={}

    // diff => target - nums[i]
        for(let i=0;i<nums.length;i++){
            diffMap[nums[i]]=i;  // number(potential-diff) -> idx
        }

        for(let i=0;i<nums.length;i++){
            let diff=target-nums[i];
            if(diffMap.hasOwnProperty(diff) && diffMap[diff]!==i) return [i,diffMap[diff]];
        }

    }

}
