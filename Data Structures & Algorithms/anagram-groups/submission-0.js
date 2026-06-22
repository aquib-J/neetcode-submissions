class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    // TimeComplexity => O(m*nlogn) -> using individual word sorted
    groupAnagrams(strs) {
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

}
