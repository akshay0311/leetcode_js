class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(element) {
        const new_node = new Node(element);

        if (this.head == null) {
            this.head = new_node;
        }
        else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = new_node
        }
    }

    formCycle() {
        let current = this.head;
        let c = 0;
        let second_node;
        while(current.next !== null) {
            current = current.next;
            c++;
            if (c === 1) second_node = current;
        }
        current.next = second_node;
    }

    findCycle() {
        if(head === null) return false;
        let prev = this.head;
        let current = this.head.next;
        while (1) {
            try {
                prev = prev.next;
                current = current.next.next;
                if (prev === current)
                    return true;
            }
            catch(error) {
                return false;
            }
        }
    }
}


let linked_list = new LinkedList();

linked_list.addNode(10);
linked_list.addNode(30);
linked_list.addNode(20);
linked_list.addNode(30);
linked_list.formCycle();
console.log(linked_list.findCycle());