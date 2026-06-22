class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // using bitwise operator (xor ^)
    singleNumber(nums) {
        let num=0;
        nums.forEach(number=>{num^=number});
        return num;
    }
}
