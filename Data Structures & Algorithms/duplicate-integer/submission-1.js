class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numberSet=new Set(nums);
        return !(nums.length==numberSet.size);
    }
}
