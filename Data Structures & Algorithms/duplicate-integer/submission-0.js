class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    _hasDuplicate(nums) {
        let uniqueNumbers=new Set(nums);
        if(uniqueNumbers.size!==nums.length) return true;
        return false;
    }

    hasDuplicate(nums){
        let sortedNumbers=nums.sort((a,b)=>a-b);
        for(let i=0;i<sortedNumbers.length-1;i++){
            if(sortedNumbers[i]==sortedNumbers[i+1]) return true;
        }
        return false;
    }
}
