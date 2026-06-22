class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isNotAlphaNumberic(char){
        return !/[A-Za-z0-9]/.test(char);
    }

    isPalindrome(s) {
        let characterString=''

        for(let char in s){
            if(!this.isNotAlphaNumberic(s[char])){
                characterString+=s[char].toLowerCase();
            }
        }

        let startPtr=0;
        let endPtr=characterString.length-1;

        while(startPtr<endPtr){
            if(characterString[startPtr]!==characterString[endPtr]){
                 return false;
            }
            endPtr-=1;
            startPtr+=1;
        }
        return true;
    }
}
