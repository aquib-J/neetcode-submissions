from collections import Counter

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if(len(s)!=len(t)):
            return False
        if(len(set(s))!=len(set(t))):
            return False

        s_freq=Counter(s)
        t_freq=Counter(t)

        for char in s_freq:
            if char not in t_freq or s_freq[char]!=t_freq[char]:
                return False
            else:
                continue
        return True

    

            