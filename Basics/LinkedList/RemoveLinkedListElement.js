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

    addNode(val) {
        const new_node = new Node(val);

        if (this.head === null) {
            this.head = new_node;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = new_node
        }
    }

    display() {
        let current = this.head;
        let ans = "";
        while (current !== null) {
            ans += " "+current.val + "->"
            current = current.next;
        }
        console.log(ans);
    }

    removeLinkedListElement(element) {
        let prev = this.head;
        let current = this.head.next;

        while(current !== null) {
            if (current.val === element) {
                prev.next = current.next
            }
            if (current?.val !== element) {
                prev = current;
            }
            current = current.next;
        }
        if (this.head.val === element) this.head = this.head.next;
    }
}


let linked_list = new LinkedList();

linked_list.addNode(10);
linked_list.addNode(10);
linked_list.addNode(20);
linked_list.addNode(10);
linked_list.addNode(10);
linked_list.addNode(25);
linked_list.addNode(10);
linked_list.addNode(10);
linked_list.addNode(2);




linked_list.display()

linked_list.removeLinkedListElement(10);

linked_list.display()