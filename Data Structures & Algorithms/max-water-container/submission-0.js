class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // bruteForce
    // maxArea(heights) {
    //     let area=0;

    //     for(let i=0;i<heights.length;i++){
    //         for(let j=i+1;j<heights.length;j++){
    //             area=Math.max(area,Math.min(heights[i],heights[j])*Math.abs(j-i));
    //         }
    //     }
    //     return area;
    // }

    maxArea(heights){
        let maxArea=0;

        let left=0;
        let right=heights.length-1;
        while(left<right){
            maxArea=Math.max(maxArea,Math.min(heights[left],heights[right])*(Math.abs(right-left)));
            if(heights[left]<heights[right]) { left+=1;}
            else {right-=1;}
        }
        return maxArea;
    }
}
