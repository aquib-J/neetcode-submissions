class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majRequirement=Math.floor(nums.length/2);
        let majElem;
        let freqMap=nums.reduce((map,number)=>{
            if(map.get(number)) {
                map.set(number,map.get(number)+1);
                return map;
                }
                else{
                    map.set(number,1);
                    return map;
                }
            
        },new Map());

        for(let [k,v] of freqMap){
            if(freqMap.get(k) > majRequirement) return k;
        }
        
    }
}
