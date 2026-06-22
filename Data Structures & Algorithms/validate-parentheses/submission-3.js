class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s){
        let charMap={
            ')':'(',
            '}':'{',
            ']':'['
        }

        let charStack=[];

        for(let i=0;i<s.length;i++){
            charStack.push(s[i]);
            if(charMap[s[i]]==charStack[charStack.length-2] && charStack.length>=2){
                charStack.pop();
                charStack.pop();
            }
        }
        return charStack.length==0;

    }
}
