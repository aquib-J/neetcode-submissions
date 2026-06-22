class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    // TimeComplexity => O(m*nlogn) -> using individual word sorted
    _groupAnagrams(strs) {
        let countMap={};
        for(let word of strs){
            let sortedWord=word.split('').sort().join('');
            if(!countMap[sortedWord]) {
                countMap[sortedWord]=[word];
            }
            else countMap[sortedWord].push(word);
        }
        return Object.values(countMap);
    }

    // Hashmap based 
    groupAnagrams(strs){
        let countMap={}
        for(let word of strs){
            let key=new Array(26).fill(0);
            for(let char of word){
            key[char.charCodeAt(0)-'a'.charCodeAt(0)]+=1
            }
            key=key.join(',');
            if(!countMap[key]) countMap[key]=[word];
            else countMap[key].push(word);
        }
        return Object.values(countMap);
    }

}
