class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */

    // Simplest solution by counting items and then over writing them in the original array in the second pass
    sortColors(nums) {
        let countArr= new Array(3).fill(0);

        for(let i=0;i<nums.length;i++){
            countArr[nums[i]]+=1;
        }

        let j=0;
        for(let i=0;i<countArr.length;i++){
            let looper=0
            while(looper<countArr[i]){
                nums[j++]=i;
                looper+=1;
            }
        }

    }
}
