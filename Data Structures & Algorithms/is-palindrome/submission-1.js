class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    const isAlphanumberic=(char)=>/[A-Za-z0-9]/g.test(char);

    
    let l=0;
    let r=s.length-1;
    while(l<r){
        if(!isAlphanumberic(s[l])) {l+=1; continue;}
        if(!isAlphanumberic(s[r])) {r-=1; continue;}
        if(s[l].toLocaleLowerCase()!==s[r].toLocaleLowerCase()) return false;
        else {l+=1; r-=1;}
    }

    return true;    
    
    }
}
