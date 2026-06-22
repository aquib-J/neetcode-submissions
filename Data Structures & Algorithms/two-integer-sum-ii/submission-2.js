class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(numbers, target) {
    //     let left=0;
    //     let right=numbers.length-1;

    //     while(left<right){
    //         if(numbers[left]+numbers[right]==target) return [left+1,right+1];
    //         else if((numbers[left]+numbers[right])>target){right-=1;}
    //         else if((numbers[left]+numbers[right])<target){left+=1;}
    //         continue;
    //     }
    // }

    twoSum(numbers,target){
        let firstPtr=0;
        let lastPtr=numbers.length-1;

        while(lastPtr>firstPtr){
            if((numbers[firstPtr]+numbers[lastPtr])>target){
                lastPtr-=1;
            }
            else if((numbers[firstPtr]+numbers[lastPtr])<target) {
                firstPtr+=1;
            }
            else if((numbers[firstPtr]+numbers[lastPtr])==target) {
                return [firstPtr+1,lastPtr+1];
            }
            else{
                firstPtr+=1;
                lastPtr-=1;
            }
        }

    }
}
