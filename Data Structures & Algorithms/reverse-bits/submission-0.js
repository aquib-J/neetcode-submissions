class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
   
    reverseBits(n) {
        let result=0;

        for(let i=0;i<32;i++){
            let lastBit= n & 1; // tells the bit 0&1->0, 1&1->1
            let reverseBit=lastBit<<(31-i); // take the last bit & shift it to the left to start from the other end;

            result=result | reverseBit; // OR ing to add the bits to 000000... without taking away anything from other bits
            n = n >>> 1; // kick the lsb out of picture to the left;
        }

        return result >>> 0 ; // stylish way of converting binary to decimal number
    }
}
