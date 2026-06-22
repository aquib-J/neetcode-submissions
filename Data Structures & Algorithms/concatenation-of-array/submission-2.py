class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        output=[]
        i=0
        while i<2*len(nums):
            n=i%len(nums)
            output.append(nums[n])
            i+=1
        return output