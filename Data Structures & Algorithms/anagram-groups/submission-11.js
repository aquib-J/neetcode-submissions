class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    // TimeComplexity => O(m*nlogn) -> using individual word sorted
    // _groupAnagrams(strs) {
    //     let countMap={};
    //     for(let word of strs){
    //         let sortedWord=word.split('').sort().join('');
    //         if(!countMap[sortedWord]) {
    //             countMap[sortedWord]=[word];
    //         }
    //         else countMap[sortedWord].push(word);
    //     }
    //     return Object.values(countMap);
    // }

    // // Hashmap based 
    // groupAnagrams(strs){
    //     let countMap={}
    //     for(let word of strs){
    //         let key=new Array(26).fill(0);
    //         for(let char of word){
    //         key[char.charCodeAt(0)-'a'.charCodeAt(0)]+=1
    //         }
    //         key=key.join(',');
    //         if(!countMap[key]) countMap[key]=[word];
    //         else countMap[key].push(word);
    //     }
    //     return Object.values(countMap);
    // }



    //HashMap based

    // groupAnagrams(strs){
    //     let wordSublistMap={};

    //     for(let word of strs){
    //         let key=new Array(26).fill(0);
    //         for(let char of word){
    //             key['z'.charCodeAt()-char.charCodeAt()]+=1;
    //         }
    //         key=key.join(','); // very important
    //         if(!wordSublistMap[key])wordSublistMap[key]=[word];
    //         else wordSublistMap[key].push(word);
    //     }

    //     return Object.values(wordSublistMap);
    // }


 // Partial correct solution , but key function not correct, best key function used binary string 26bit long with 
 // character encoding
    // groupAnagrams(strs){
    //     let anagramMap=new Map();
    //     let output=[];

    //     for(let word of strs){
    //         let wordSignature=word.split('').reduce((a,c)=>{
    //             a += (c.charCodeAt(0));
    //             return a;
    //         },0)
    //         if(anagramMap.has(wordSignature)){
    //             anagramMap.set(wordSignature,[...anagramMap.get(wordSignature),word]);
    //         }
    //         else {
    //             anagramMap.set(wordSignature,[word]);
    //         }
    //     }
    //     for(const value of anagramMap.values()){
    //         output.push(value);
    //     }
    //     return output;
    // }

    // groupAnagrams(strs){
    //     let anagram=new Map();
    //     let output=[];

    //     for(let word of strs){
    //         let key=new Array(26).fill(0);

    //         for(let char of word){
    //             key['z'.charCodeAt(0)-char.charCodeAt(0)]+=1
    //         }
    //         key=key.join(',');

    //         if(anagram.has(key)) {
    //             let value=anagram.get(key);
    //             value.push(word);
    //             anagram.set(key,value);
    //         }
    //         else anagram.set(key,[word]);
    //     }

    //     for(const value of anagram.values()){
    //         output.push(value);
    //     }
    //     return output;
    // }

    // Practice Session Jan-12'26

    // //Naive Implementation
    // groupAnagrams(strs){
    //     let wordGroupMap=new Map();

    //     for(let i=0;i<strs.length;i++){
    //         let hash=this.hash(strs[i]);
    //         if(wordGroupMap.has(hash)){
    //             wordGroupMap.get(hash).push(strs[i]);
    //         }else{
    //             wordGroupMap.set(hash,[strs[i]]);
    //         }
    //     }

    //     return Array.from(wordGroupMap.values());
    // }

    // hash(string){
    //     return string.split('').sort().join('');
    // }

    // Practice Session Jan-22'26
    // groupAnagrams(strs){
    //     let accMap=new Map();
    //     for(let i=0;i<strs.length;i++){
    //         let wordHash=this.wordHash(strs[i]);
    //         if(accMap.has(wordHash)){
    //             accMap.get(wordHash).push(strs[i]);
    //         }else{
    //             accMap.set(wordHash,[strs[i]]);
    //         }
    //     }
    //     return Array.from(accMap.values());
    // }

    wordHash(word){
        return word.split('').sort().join('');
    }

    // using better hash signature
    groupAnagrams(strs){
        let accMap=new Map();

        for(let i=0;i<strs.length;i++){
            const count=new Array(26).fill(0); // 26 char long binary sequence
            const currentWord=strs[i];
                for(let j=0;j<currentWord.length;j++){
                    count[currentWord[j].charCodeAt(0)-'a'.charCodeAt()]+=1;
                }
                const key=count.join(',');
                if(accMap.has(key)) accMap.get(key).push(currentWord);
                else accMap.set(key,[currentWord]);
        }
        return Array.from(accMap.values());
    }
}
