from collections import Counter

class Solution:
    # def isAnagram(self, s: str, t: str) -> bool:
    #     s_freq_map=Counter(list(s))
    #     t_freq_map=Counter(list(t))

    #     for key in s_freq_map.keys():
    #         if key not in t_freq_map or t_freq_map[key]!=s_freq_map[key]:
    #             return False
    #     return True

    def isAnagram(self,s:str,t:str)->bool:
        s_arr=sorted(list(s))
        t_arr=sorted(list(t))

        if len(s_arr)!=len(t_arr):
            return False

        for i,char in enumerate(s_arr):
            if s_arr[i]!=t_arr[i]:
                return False
        return True

        