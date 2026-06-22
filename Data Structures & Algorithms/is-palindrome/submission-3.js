class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // isPalindrome(s) {
    // const isAlphanumberic=(char)=>/[A-Za-z0-9]/g.test(char);

    
    // let l=0;
    // let r=s.length-1;
    // while(l<r){
    //     if(!isAlphanumberic(s[l])) {l+=1; continue;}
    //     if(!isAlphanumberic(s[r])) {r-=1; continue;}
    //     if(s[l].toLocaleLowerCase()!==s[r].toLocaleLowerCase()) return false;
    //     else {l+=1; r-=1;}
    // }

    // return true;    
    
    // }

    // isPalindrome(s){

    //     let isAlphaNum=(char)=>/[A-Za-z0-9]/g.test(char);

    //     let givenString=s.split('').filter(char=>isAlphaNum(char)).join('');

    //     let firstPtr=0;
    //     let lastPtr=givenString.length-1;

    //     while(lastPtr>firstPtr){
    //         let firstChar=givenString[firstPtr].toLowerCase();
    //         let lastChar=givenString[lastPtr].toLowerCase();
    //         if(firstChar!=lastChar) return false;
    //         else{
    //             firstPtr+=1;
    //             lastPtr-=1;
    //         }
    //     }
    //     return true;
    // }

    // Practice Session Jan-12'26-----

    isPalindrome(s){
        let isAlphaNum=char=>/[A-Za-z0-9]/g.test(char);

        let clearString=s.split('').filter(char=>isAlphaNum(char)).join('');

        let firstPtr=0;
        let lastPtr=clearString.length-1;
        while(firstPtr<lastPtr){
            let firstChar=clearString[firstPtr].toLowerCase();
            let lastChar=clearString[lastPtr].toLowerCase();
            if(firstChar!=lastChar) return false;
            else {
                firstPtr+=1;
                lastPtr-=1;
            }
        }
        return true;
    }
}
