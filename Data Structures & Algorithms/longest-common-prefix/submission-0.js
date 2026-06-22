

class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */

    // Using sorting and comparing the first and last
    // longestCommonPrefix(strs) {
    //     if(strs.length==1) return strs[0];

    //     strs.sort();
    //     let N=Math.min(strs[0].length,strs[strs.length-1].length); // min length among all the string

    //     for(let i=0;i<N;i++){
    //         if(strs[0][i]!==strs[strs.length-1][i]) return strs[0].slice(0,i);
    //     }
    //     return strs[0];

    // }

    // Horizontal Scanning
    longestCommonPrefix(strs){
        let prefix=strs[0];
        for(let i=1;i<strs.length;i++){
            let j=0;
            let currentWord=strs[i];
            while(j<Math.min(prefix.length,currentWord.length)){
                if(prefix[j]!=currentWord[j]) break;
                else j++;
            }
            prefix=prefix.slice(0,j);
        }
        return prefix;
    }


}
