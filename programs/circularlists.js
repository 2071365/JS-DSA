function circular(list) {
    let slow = list.head
    let fast = list.head
    
    while(fast?.next?.next){
        if (slow === fast.next){
            return true
        }
        slow = slow.next
        fast = fast.next.next
    }
    return false
}

module.exports = circular
