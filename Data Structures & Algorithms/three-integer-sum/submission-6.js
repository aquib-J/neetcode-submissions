class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // threeSum(nums) {
    //     nums.sort((a,b)=>a-b); // always explicitly sort
    //     let result=[];
    
    //     for(let i=0;i<nums.length-2;i++){
    //         if(i>0 && (nums[i]==nums[i-1])) continue; // to prevent duplicate points with i -> same
    //         let first=i+1;
    //         let last=nums.length-1;
    //         while(first<last){
    //             let sum=nums[first]+nums[last]+nums[i];
    //             if(sum>0) last--;
    //             else if(sum<0) first++;
    //             else{
    //                 result.push([nums[i],nums[first],nums[last]]);
    //                 first++;
    //                 last--;
    //                 while(first<last && nums[first]==nums[first-1]){ // to prevent duplicates
    //                     first++;
    //                 }
    //             }
    //         }
    //     }
    //     return result;
    // }

    threeSum(nums){
        let sortedNums=nums.sort((a,b)=>a-b);
        let solutions=[];
        for(let i=0;i<sortedNums.length-2;i++){
            let fixedNum=nums[i];
            if(fixedNum>0) break; // No solution possible here
            if(i>0 && sortedNums[i]==sortedNums[i-1]) continue; // to prevent duplicates
            let firstWindowPtr=i+1;
            let lastWindowPtr=sortedNums.length-1;
            while(lastWindowPtr>firstWindowPtr){
                let sum=fixedNum+sortedNums[firstWindowPtr]+sortedNums[lastWindowPtr];
                if(sum>0){
                    lastWindowPtr-=1;
                }else if(sum<0){
                    firstWindowPtr+=1;
                }else{
                    solutions.push([fixedNum,sortedNums[firstWindowPtr],sortedNums[lastWindowPtr]]);
                    firstWindowPtr+=1;
                    lastWindowPtr-=1;
                    while(firstWindowPtr<lastWindowPtr && sortedNums[firstWindowPtr]==sortedNums[firstWindowPtr-1]){
                        firstWindowPtr+=1;
                    }
                }
            }
        }
        return solutions;   
    }
}
