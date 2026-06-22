class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return this.recursiveSearch(nums,target,0,nums.length-1);
    }

    recursiveSearch(nums,target,l,u){
        let mid=l+Math.floor((u-l)/2);
        if(l>u) return -1;
       if(nums[mid]==target) return mid;
       return (nums[mid]<target) ? this.recursiveSearch(nums,target,mid+1,u) : this.recursiveSearch(nums,target,l,mid-1);
    }
}
