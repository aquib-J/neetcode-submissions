class Solution:
    # def twoSum(self, nums: List[int], target: int) -> List[int]:
    #     nums.sort()

    #     i=0
    #     j=len(nums)-1

    #     while i<j:
    #         if nums[i]+nums[j]==target:
    #             return [i,j]
    #         elif nums[i]+nums[j]<target:
    #             i+=1
    #         elif nums[i]+nums[j]>target:
    #             j-=1
    #         else:
    #             continue
    
    def twoSum(self, nums:List[int], target:int) -> List[int]:
        idx_map={}

        for i,num in enumerate(nums):
            if (target-num) not in idx_map:
                idx_map[num]=i
            elif (target-num) in idx_map:
                return [idx_map.get(target-num),i]
            else:
                continue
        
        

        