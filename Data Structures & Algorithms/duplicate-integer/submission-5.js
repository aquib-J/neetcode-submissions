class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums){
    //     let numberSet=new Set(nums);
    //     return !(numberSet.size==nums.length);
    // }

    // hasDuplicate(nums){
    //     let countMap=nums.reduce((map,number)=>{
    //         if(!map.hasOwnProperty(number)){
    //             map[number]=1;
    //             return map;
    //         }
    //         map[number]+=1;
    //         return map;
    //     },{});
    
    // for(const value of Object.values(countMap)){
    //     if(value>1) return true;
    // }
    // return false;
    
    // }

    // hasDuplicate(nums){
    //     nums.sort();
    //     for(let i=0;i<nums.length;i++){
    //         let secondPtr=i+1;
    //         if(nums[secondPtr] && nums[secondPtr]==nums[i]) return true;
    //     }
    //     return false;
    // }

    // hasDuplicate(nums){
    //     let seenMap={}
    //     let counter=0;
    //     while(counter<nums.length){
    //         if(seenMap[nums[counter]]) return true;
    //         else{
    //             seenMap[nums[counter]]=true;
    //         }

    //         counter++;
    //     }
    //     return false;
    // }

    // hasDuplicate(nums){
    //     let uniqueNums=new Set(nums);
    //     return nums.length!=uniqueNums.size;
    // }

    // hasDuplicate(nums){
    //     let numMap=new Map();

    //     for(let i=0;i<nums.length;i++){
    //         if(numMap.has(nums[i])) return true;
    //         else {
    //             numMap.set(nums[i],true);
    //         }
    //     }
    //     return false;
    // }
/**************************** Latest Effort (Nov18 2025) ************************ */
    // hasDuplicate(nums){
    //     let numSet=new Set(nums);
    //     if(numSet.size===nums.length) return false;
    //     else return true;
    // }

    // hasDuplicate(nums){
    //     let sortedNums=nums.sort((a,b)=>a-b);
    //     for(let i=0,j=i+1;i<nums.length-1,j<nums.length;i++,j++){
    //         if(sortedNums[i]==sortedNums[j]) return true;
    //     }
    //     return false;
    // }

    // hasDuplicate(nums){
    //     let counterMap=new Map();
    //     for(let i=0;i<nums.length;i++){
    //         if(counterMap.has(nums[i])) return true;
    //         else {
    //             counterMap.set(nums[i],true);
    //         }
    //     }
    //     return false;
    // }





    // Latest effort Jan 12 '26
    // hasDuplicate(nums){
    //     nums=nums.sort();

    //     for(let i=0;i<nums.length-1;i++){
    //         if(nums[i]==nums[i+1]) return true;
    //     }
    //     return false;
    // }

    hasDuplicate(nums){
        let countMap=new Map();

        for(let number of nums){
            if(countMap.has(number)) return true;
            countMap.set(number,1);
        }
        return false;
    }


}
