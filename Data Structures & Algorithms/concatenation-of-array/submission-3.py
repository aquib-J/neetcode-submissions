
class Solution:
    def getConcatenation(self,nums:List[int]) -> List[int]:
        output=[]
        for i in range(2*len(nums)):
            output.append(nums[i%len(nums)])
        return output
