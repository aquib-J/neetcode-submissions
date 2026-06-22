class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        // formula is (a^b + a&b <<1) recursively till a&b is 0-> the first part does fine for add'n but the second part takes care of the carry
    
        while(b!==0){
            let newIntermediateTemp=(a&b)<<1;
            a=a^b;
            b=newIntermediateTemp;
        }
        return a;    
    
    }
}
