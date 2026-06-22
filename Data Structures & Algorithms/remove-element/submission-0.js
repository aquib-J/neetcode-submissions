class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */

    // Practice 22Jan'26
    // Brute Force
    // removeElement(nums, val) {
    //     let tempArr=[];

    //     for(let i=0;i<nums.length;i++){
    //         if(nums[i]!==val) tempArr.push(nums[i]);
    //     }

    //     for(let j=0;j<tempArr.length;j++){
    //         nums[j]=tempArr[j];
    //     }
    //     return tempArr.length;
    // }

    // Using pointer
    removeElement(nums,val){
        let k=0; // pointer to track substitution

        for(let i=0;i<nums.length;i++){
            if(nums[i]!==val){
                nums[k++]=nums[i];
            }
        }
        return k;
    }
}
