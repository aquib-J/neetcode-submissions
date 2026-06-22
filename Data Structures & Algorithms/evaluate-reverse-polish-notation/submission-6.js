class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let operators=['+','-','*','/'];
        let evalStack=[];

        for(let i=0;i<tokens.length;i++){
            evalStack.push(tokens[i]);
            if(operators.includes(tokens[i])){
                let operator=evalStack.pop();
                let val2=evalStack.pop();
                let val1=evalStack.pop();
                let evaluatedValue=evaluate(val1,val2,operator);
                evalStack.push(evaluatedValue);
            }
        }


        function evaluate(val1,val2,operator){
            val1=Number(val1);
            val2=Number(val2);
            switch(operator){
                case '+':
                    return val1+val2;
                case '-':
                    return val1-val2;
                case '*':
                    return val1*val2;
                case '/':
                    return Math.abs(parseInt(val1/val2))==0?Math.abs(parseInt(val1/val2)):parseInt(val1/val2);
                default:
                    throw new Error('Invalid Operator');
            }
        }

        return evalStack[evalStack.length-1];
    }
}
