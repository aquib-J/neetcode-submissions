class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     let numSet=new Set()
    //     nums.forEach(num=>numSet.add(num))
    //     if (numSet.size!=nums.length){
    //         return true
    //     }
    //     else return false

    // }

    hasDuplicate(nums){
        let mapCounter={}

        nums.forEach(num=>{
            if(mapCounter[num]) mapCounter[num]+=1
            else mapCounter[num]=1
        })

        for ( let value of Object.values(mapCounter) ){
            if (value>1) return true
        }
        return false
    }
}
