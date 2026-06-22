class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // Most naive solution
    // _twoSum(nums, target) {
    //     for(let i=0;i<nums.length;i++){
    //         for(let j=0;j<nums.length;j++){
    //             if(i!==j && (nums[i]+nums[j])==target){
    //                  if(i<j) return [i,j];
    //                  else return [j,i];
    //             }
    //         }
    //     }
    // }
    
    // twoSum(nums,target){
    //     let diffMap={}

    // // diff => target - nums[i]
    //     for(let i=0;i<nums.length;i++){
    //         diffMap[nums[i]]=i;  // number(potential-diff) -> idx
    //     }

    //     for(let i=0;i<nums.length;i++){
    //         let diff=target-nums[i];
    //         if(diffMap.hasOwnProperty(diff) && diffMap[diff]!==i) return [i,diffMap[diff]];
    //     }

    // }


    // twoSum(nums,target){
    //     let diffMap={};

    //     for(let i=0;i<nums.length;i++){
    //         if(diffMap.hasOwnProperty(target-nums[i])) {
    //             return [diffMap[target-nums[i]],i];
    //         }
    //         else diffMap[nums[i]]=i;
    //     }
    // }



    // twoSum(nums,target){
    //     let diff=new Map();

    //     for(let i=0;i<nums.length;i++){
    //         if(diff.has(target-nums[i])) {
    //             return [i,diff.get(target-nums[i])]
    //             };
    //          diff.set(nums[i],i); 
    //          }
    //     }

    
    // Attempted on Jan'12-26

    // brute force strategy
    // twoSum(nums,target){
    //     for(let i=0;i<nums.length;i++){
    //         for(let j=0;j<nums.length;j++){
    //             if(nums[i]+nums[j]==target && i!=j) return [i,j];
    //         }
    //     }
    // }

    // // smarter Strategy
    // twoSum(nums,target){
    //     let diffMap=new Map();

    //     for(let i=0;i<nums.length;i++){
    //         let diff=target-nums[i];
    //         if(diffMap.has(diff)) {
    //             let j=diffMap.get(diff);
    //             return i>j? [i,j] : [j,i]
    //             }
    //         else diffMap.set(nums[i],i);
    //     }

    // Latest effort Jan 19 '26 ----

    twoSum(nums,target){
        let diffMap=new Map();
        for(let i=0;i<nums.length;i++){
            if(diffMap.has(nums[i])) return [i,diffMap.get(nums[i])];
            else diffMap.set(target-nums[i],i);
        }
        }

    }
    



