class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // isAnagram(s, t) {
    //     if(s.length!==t.length) return false;

    //     let charCountMapS=s.split('').reduce((map,char)=>{
    //         if(!map.hasOwnProperty(char)){ map[char]=1; return map;}
    //         else {map[char]+=1; return map;}
    //     },{});

    //     let charCountMapT=t.split('').reduce((map,char)=>{
    //         if(!map.hasOwnProperty(char)){ map[char]=1; return map;}
    //         else {map[char]+=1; return map;}
    //     },{});

    //     for(const key in charCountMapS){
    //         if(charCountMapS[key]!==charCountMapT[key]) return false;
    //     }

    //     return true;


    // }

    // most naive solution using sorting O(nlogn)
    // isAnagram(s,t){
    //     if(s.length!=t.length) return false;
    //     let sString=s.split("").sort();
    //     let tString=t.split('').sort();

    //     let ptr1=0;
    //     let ptr2=0;
    //     while(ptr1<sString.length && ptr2<tString.length){
    //         if(sString[ptr1]!=tString[ptr2]) return false;
    //         ptr1++;
    //         ptr2++;
    //     }
    //     return true;
    // }

    // using MapCounter 
    // isAnagram(s,t){
    //     if(s.length!==t.length) return false;
    //     let sMap={};
    //     let tMap={};
    //     for(let i=0;i<s.length;i++){
    //         if(!sMap[s[i]])sMap[s[i]]=1;
    //         else sMap[s[i]]+=1;
    //         if(!tMap[t[i]])tMap[t[i]]=1;
    //         else tMap[t[i]]+=1;
    //     }

    //     for(let key in sMap){
    //         if(!tMap.hasOwnProperty(key) || tMap[key]!==sMap[key]) return false;
    //     }
    //     return true;

    // }

    // Using clever hashMap

    // isAnagram(s,t){
    //     if(s.length!==t.length) return false;
    //     let counter=new Array(26).fill(0);

    //     for(let i=0;i<s.length;i++){
    //         counter['z'.charCodeAt()-s.charCodeAt(i)]+=1;
    //         counter['z'.charCodeAt()-t.charCodeAt(i)]-=1;
    //     }

    //     return counter.every(number=>number==0);
    // }



    // isAnagram(s,t){
    //     if(s.length!==t.length) return false;

    //     let [sMap,tMap]=[s,t].map(string=>{
    //         return string.split('').reduce((a,c)=>{
    //             if(!a.has(c)) a.set(c,1);
    //             else a.set(c,a.get(c)+1);
    //             return a;
    //         },new Map())
    //     });
        
    //     console.log(sMap,tMap);
    //     for(const key of sMap.keys()){
    //         if(!tMap.has(key)) return false;
    //         if(sMap.get(key)!=tMap.get(key)) return false;
    //     }
    //     return true;
    // }


    isAnagram(s,t){
        if(s.length!=t.length) return false;

        let count=new Array(26).fill(0);

        for(let i=0;i<s.length;i++){
            count[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
            count[t.charCodeAt(i)-'a'.charCodeAt(0)]--;
        }

        return count.every(val=>val==0);
    }






































}
