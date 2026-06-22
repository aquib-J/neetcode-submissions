

class Solution:

    # naive solution:
    # def twoSum(self,nums:List[int], target:int)->List[int]:
    #     for i in range(len(nums)):
    #         for j in range(i+1,len(nums)):
    #             if i!=j and (nums[i]+nums[j]==target):
    #                 return [i,j]
    #             else:
    #                 continue
    

    # smarter solution using sets

    def twoSum(self,nums:List[int],target:int)->List[int]:
        value_exists=dict()
        for i,v in enumerate(nums):
            if target-v in value_exists:
                return [value_exists.get(target-v),i]
            else:
                # value_exists[v]=i or
                value_exists.setdefault(v,i)
            

