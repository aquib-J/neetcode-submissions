class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    // naive solution
    dailyTemperatures(temperatures) {
        let result=[];
        for(let i=0;i<temperatures.length;i++){
            let currentTemp=temperatures[i];
            let found=false;
            for(let j=i+1;j<temperatures.length;j++){
                if(temperatures[j]>currentTemp){
                    found=true;
                    result.push(j-i);
                    break;
                }
            }
            if(!found) result.push(0);
        }
    return result;
    }
}
