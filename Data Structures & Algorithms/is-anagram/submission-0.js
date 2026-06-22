class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    _isAnagram(s, t) {
         let sortedStringS=s.trim().split('').sort();
         let sortedStringT=t.trim().split('').sort();
         if(sortedStringS.length!==sortedStringT.length) return false;
         for(let i=0;i<sortedStringT.length;i++){
            if(sortedStringS[i]!==sortedStringT[i]) return false;
         }
         return true;
    }
    isAnagram(s,t){
        if(s.length!=t.length) return false;
        let sMap=s.split('').reduce((map,char)=>{
            if(map.hasOwnProperty(char)) map[char]+=1;
            else map[char]=1;
            return map;
        },{});
        let tMap=t.split('').reduce((map,char)=>{
            if(map.hasOwnProperty(char)) map[char]+=1;
            else map[char]=1;
            return map;
        },{})
        for(const key in sMap){
            if(sMap[key]!==tMap[key]) return false;
        }
        return true;
    }
}
