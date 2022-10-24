class Node{
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(head=null){
        this.head = head
    }

    insertFirst(value){
        this.head = new Node(value, this.head)
    }

    size(){
        let node = this.head
        let counter = 0
        while(node){
            node = node.next
            counter ++
        }
        return counter
    }

    getFirst(){
        return this.head
    }

    getLast(){
        let node = this.head
        while(node && node.next){
            node = node.next            
        }
        return node
    }

    clear(){
        this.head = null
    }

    removeFirst(){
        this.head = this.head ? this.head.next : this.head 
    }

    removeLast(){
        let previous = this.head
        let node = this.head ? this.head.next : null

        while(node?.next){
            previous = node
            node = node.next
        }

        if (previous?.next){
            previous.next = null
            return
        }

        this.head = null
        
    }

    insertLast(value){
        /* const node = new Node(value)
        const head = this.head

        if(!head){
            this.head = node
            return
        }

        while(head && head.next){
            head = head.next
        }

        head.next = node */
        const last = this.getLast()
        if(last){
            last.next = new Node(value)
        }
        else{
            this.insertFirst(value)
        }
    }

    getAt(index){
        /* // size iterates through all elements so this becomes quadratic runtime.
        const size = this.size()
        let counter = 0
        let node = this.head

        while(counter < size){            
            if (counter === index){
                return node
            }
            node = node.next
            ++counter
        }

        return null */
        let node = this.head
        let counter = 0
        while (node){
            if(counter === index){
                return node
            }
            node = node.next
            counter++
        }
        return null
    }

    removeAt(index){
        /* let previous = null
        let current = this.head
        let counter = 0

        while(current){
            if(index === counter){
                if (previous){
                    previous.next = current.next
                }
                else{
                    this.head = current.next
                }                
                
                return
            }
            previous = current
            current = current.next
            ++counter
        }
    
        return null   */  
        const node = this.getAt(index - 1)   
        if(node){
            node.next = this.getAt(index) ? this.getAt(index).next : null
            return
        }
        else if(index === 0){
            this.head = this.getAt(index + 1)
            return
        }        
    }

    insertAt(data, index){
        const previous = this.getAt(index - 1)
        if(previous){
            previous.next = new Node(data, previous.next)            
        }
        else if (index === 0){
            this.head = new Node(data, this.head)
        }
        else{
            this.insertLast(data)
        }        
    }

    forEach(fn){
        let node = this.head
        let current = 0
        while(node){
            fn.call(this, node, current)
            node = node.next
            current++
        }
    }

    *[Symbol.iterator] (){
        let node = this.head
        while(node){
            yield node
            node = node.next
        }
    }
}

module.exports = {
    Node,
    LinkedList
}