class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b);
        let result=[];
    
        for(let i=0;i<nums.length-2;i++){
            if(i>0 && (nums[i]==nums[i-1])) continue; // to prevent duplicate points with i -> same
            let first=i+1;
            let last=nums.length-1;
            while(first<last){
                let sum=nums[first]+nums[last]+nums[i];
                if(sum>0) last--;
                else if(sum<0) first++;
                else{
                    result.push([nums[i],nums[first],nums[last]]);
                    first++;
                    last--;
                    while(first<last && nums[first]==nums[first-1]){ // to prevent duplicates
                        first++;
                    }
                }
            }
        }
        return result;
    }
}
