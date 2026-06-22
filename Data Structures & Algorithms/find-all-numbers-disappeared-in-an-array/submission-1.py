
class Solution:
    def findDisappearedNumbers(self,nums:List[int])->List[int]:
        output=[]

        for i in range(1,len(nums)+1):
            if i not in nums:
                output.append(i)
            else:
                continue

        return output
