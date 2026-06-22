class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */

    // Most basic ( Brute force -> DFS with no condition -> only the leaf level are checked and then valid pairs are collected )
    generateParenthesis(n) {
        // All combination | permutations | selections problems are basically brute forced through 
        // Backtracking ( which is just DFS with some conditions to prune/not select invalid nodes)
        // DP is efficient version when applicable

    
        // 1. Brute force (only DFS -> + no constraint)
    //    const res=[];
    //    this.dfs("",res,n);
    //    return res;

        // 2. Backtrack (DFS + constraint) 

        const result=[];
        this.backtrack(0,0,n,result,'');
        return result;
    }

    backtrack(openN,closedN, pairLength, result, string){
        if(openN==closedN && openN==pairLength){
            result.push(string);
            return;
        }

        if(openN<pairLength){
            this.backtrack(openN+1,closedN,pairLength,result,string+'(');
        }
        if(closedN<openN){
            this.backtrack(openN,closedN+1,pairLength,result,string+')')
        }
    }

    dfs(string,result,pairLength){
        if(string.length===2*pairLength){
            if(this.valid(string)) result.push(string);
            return;
        }

        this.dfs(string+'(',result,pairLength);
        this.dfs(string+')', result, pairLength);
    }

    valid(string){
        let open=0;
        for(const char of string){
            open+=(char == '(') ? 1:-1;
            if(open<0) return false;
        }
        return open==0;
    }

}
