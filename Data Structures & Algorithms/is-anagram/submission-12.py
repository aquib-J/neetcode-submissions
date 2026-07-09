from collections import Counter

class Solution:
    # def isAnagram(self, s: str, t: str) -> bool:
    #     s_map=Counter(s)
    #     t_map=Counter(t)

    #     for key in s_map.keys():
    #         if s_map[key]!=t_map.get(key,''):
    #             return False
    #         else:
    #             continue
    #     return True

    def isAnagram(self, s:str, t:str)->bool:
        sorted_s=sorted(s)
        sorted_t=sorted(t)

        if(len(sorted_s)!=len(sorted_t)):
            return False

        for idx in range(len(sorted_s)):
            if sorted_s[idx]!=sorted_t[idx]:
                return False
        return True

    