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

    groupAnagrams(strs){
        let anagram=new Map();
        let output=[];

        for(let word of strs){
            let key=new Array(26).fill(0);

            for(let char of word){
                key['z'.charCodeAt(0)-char.charCodeAt(0)]+=1
            }
            key=key.join(',');

            if(anagram.has(key)) {
                let value=anagram.get(key);
                value.push(word);
                anagram.set(key,value);
            }
            else anagram.set(key,[word]);
        }

        for(const value of anagram.values()){
            output.push(value);
        }
        return output;
    }

}
