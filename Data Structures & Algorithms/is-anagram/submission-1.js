class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;

        let charCountMapS=s.split('').reduce((map,char)=>{
            if(!map.hasOwnProperty(char)){ map[char]=1; return map;}
            else {map[char]+=1; return map;}
        },{});

        let charCountMapT=t.split('').reduce((map,char)=>{
            if(!map.hasOwnProperty(char)){ map[char]=1; return map;}
            else {map[char]+=1; return map;}
        },{});

        for(const key in charCountMapS){
            if(charCountMapS[key]!==charCountMapT[key]) return false;
        }

        return true;


    }
}
