const Stack = require('./stack')

class QfromS{
    constructor(){
        this.stack1 = new Stack()
        this.stack2 = new Stack()
        this.queue = 
    }

    add(value){
        this.stack1.push(value)
    }
    
//  Only consider that Queues are FIFO and Stacks are FILO/LIFO
    remove(){
        while(this.stack1.peek()){
            this.stack2.push(this.stack1.pop())
        }

        const value = this.stack2.pop()

        while(this.stack2.peek()){
            this.stack1.push(this.stack2.pop())
        }

        return value
    }

    peek(){
        while(this.stack1.peek()){
            this.stack2.push(this.stack1.pop())
        }

        const value = this.stack2.peek()

        while(this.stack2.peek()){
            this.stack1.push(this.stack2.pop())
        }

        return value
    }
}