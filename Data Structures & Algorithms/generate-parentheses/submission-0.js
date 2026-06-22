class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        // 3 conditions for fulfillment
        // can add upto a max of n open parenthesis
        // can add a closed parenthesis if closed_count < open_count
        // valid if open_count==closed__count

        let stack=[];
        let result=[];

        function recursiveCombinationBuilder(openN,closedN){
            //base case:
            if(openN==closedN && openN==n){
                result.push(stack.join(''));
                return;
            }

            if(openN<n){
                stack.push('(');
                recursiveCombinationBuilder(openN+1,closedN);
                stack.pop();
            }

            if(closedN<openN){
                stack.push(')');
                recursiveCombinationBuilder(openN,closedN+1);
                stack.pop();
            }
        }

        recursiveCombinationBuilder(0,0);
        return result;
    }
}
