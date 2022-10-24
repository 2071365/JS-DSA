class Queue {
    constructor(queue=[]){
        this.queue = queue 
    }
    
    add(value){
        return this.queue.unshift(value)
    }
    
    remove(){
        return this.queue.pop()
    }

    peek(){
        return this.queue[this.queue.length - 1]
    }
}

function weave(queue1, queue2){
    const queue = new Queue()

    while (queue1.peek() || queue2.peek()){
        if (queue1.peek()){
            queue.add(queue1.remove())
        }
        if (queue2.peek()){
            queue.add(queue2.remove())
        }
    }

    return queue
}

const queue1 = new Queue([1,2])
const queue2 = new Queue(['a','b','c','d'])
console.log(weave(queue1, queue2))
