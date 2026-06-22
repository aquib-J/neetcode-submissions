class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    // bruteForce O(n2)
    countBits(n) {
        let resultArray=[];

        for(let i=0;i<=n;i++ ){
            resultArray[i]=this.count1s(i);
        }
        return resultArray;
    }

    count1s(n){
        let binString=n.toString(2);
        let count=0;
        for(let digit of binString){
            if(Number(digit)==1) count+=1;
        }
        return count;
    }
}
