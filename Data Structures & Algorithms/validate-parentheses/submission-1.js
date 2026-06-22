class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let matchChar={
            ')':'(',
            '}':'{',
            ']':'['
        }

        let stack=[s[0]];

        for(let i=1;i<s.length;i++){
            if(stack.length > 0 && matchChar[s[i]]==stack[stack.length-1]){stack.pop();}
            else stack.push(s[i]);
        }
        return stack.length==0;
    }
}
