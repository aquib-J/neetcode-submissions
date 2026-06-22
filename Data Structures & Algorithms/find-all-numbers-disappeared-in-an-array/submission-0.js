

class Solution {

    findDisappearedNumbers(nums){
        let sol_set=[];
        // most naive solution :
        for(let i=1;i<=nums.length;i++){
            if(!nums.includes(i)) sol_set.push(i);
            else continue;
        }
        return sol_set;
    }
}