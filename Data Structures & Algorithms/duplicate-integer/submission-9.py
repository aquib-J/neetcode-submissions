from collections import Counter

class Solution:
    # def hasDuplicate(self, nums: List[int]) -> bool:
    #     unique_nums=set(nums)
    #     if len(nums)!=len(unique_nums):
    #         return True
    #     else:
    #         return False
    
    def hasDuplicate(self, nums:List[int])->bool:
        freq_dict=Counter(nums)

        for value in freq_dict.values():
            if value>1:
                return True
            if value==1:
                continue
        return False