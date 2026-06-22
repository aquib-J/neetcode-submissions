class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // Naive solution
    topKFrequent(nums, k) {
        let countMap={};
        for(let i=0;i<nums.length;i++){
            if(!countMap.hasOwnProperty(nums[i]))countMap[nums[i]]=1;
            else countMap[nums[i]]+=1;
        }
        
        return Object.entries(countMap)
        .sort((a,b)=>b[1]-a[1])
        .filter((value,idx)=>idx<k)
        .map(value=>value[0]);
    }
}
