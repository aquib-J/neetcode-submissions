class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen=new Set();
        for(let number of nums){
            if(seen.has(number)) return true;
            else {
                seen.add(number);
            }
        }
        return false;
    }
}
