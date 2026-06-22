class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // Naive solution
    // topKFrequent(nums, k) {
    //     let countMap={};
    //     for(let i=0;i<nums.length;i++){
    //         if(!countMap.hasOwnProperty(nums[i]))countMap[nums[i]]=1;
    //         else countMap[nums[i]]+=1;
    //     }
        
    //     return Object.entries(countMap)
    //     .sort((a,b)=>b[1]-a[1])
    //     .filter((value,idx)=>idx<k)
    //     .map(value=>value[0]);
    // }


    //Using bucket Sort; => [0,1,2] => index mapped to frequency 
    // & values stored as array at that position

    // topKFrequent(nums,k){
    //     let output=[];
    //     let counterMap=nums.reduce((map,number)=>{
    //         map[number]=(map[number] || 0) + 1;
    //         return map;
    //     },{})
    //     let buckets=new Array(nums.length);

    //     for(let number in counterMap){
    //         if(!buckets[counterMap[number]]) buckets[counterMap[number]]=[number];
    //        else buckets[counterMap[number]].push(Number(number));
    //     }
        

    //     while(k>0){
    //         let bucket=buckets.pop();
    //         while(bucket && bucket.length && k>0){
    //             output.push(bucket.pop());
    //             k-=1;
    //         }
    //     }
    //     return output;
    // }

    // naive implementation
    topKFrequent(nums,k){
        let freqMap={}

        nums.forEach(number=>{
            if(freqMap.hasOwnProperty(number)) freqMap[number]+=1;
            else freqMap[number]=1;
        })

    return Object.entries(freqMap)
    .sort((tupleA,tupleB)=>tupleB[1]-tupleA[1])
    .map(([value,frequency])=>value)
    .filter((value,idx)=>idx<k);
        
    }

}
