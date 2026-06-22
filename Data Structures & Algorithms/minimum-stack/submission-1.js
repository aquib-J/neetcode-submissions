class MinStack {
    constructor() {
        this.minStack=[];
        this.stack=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        let value=Math.min(val,(this.minStack.length==0)?val:Math.min(val,this.minStack[this.minStack.length-1]));
        this.minStack.push(value);
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length-1];
    }
}
