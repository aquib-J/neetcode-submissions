from collections import Counter

class Solution:
    # def hasDuplicate(self,nums:List[int]) -> bool:
    #     return len(set(nums))!=len(nums)

        
    def hasDuplicate(self,nums:List[int]) -> bool:
        freq_map=Counter(nums)
        for value in freq_map.values():
            if value >1:
                return True

        return False 

