class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sorted_s=s.split('').sort()
        let sorted_t=t.split('').sort()

        if (sorted_s.length!=sorted_t.length) return false
        
        for (let i in sorted_s){
            if (sorted_s[i]!=sorted_t[i]) return false
        }
        return true
    }
}
