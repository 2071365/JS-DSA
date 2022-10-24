class Stack{
    constructor(stack=[]){
        this.stack = stack
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }
}

module.exports = Stack