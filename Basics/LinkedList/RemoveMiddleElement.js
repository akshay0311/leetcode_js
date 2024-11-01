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

        if(this.head === null) {
            this.head = new_node;
        }
        else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = new_node;
        }
    }
    removeMiddleElement() {
        let c = 0;
        let current = this.head;
        while(current !== null) {
            c+=1
            current = current.next;
        }
        let middleIndex = Math.ceil(c / 2);

        if (c ===)


        c = 0;
        let prev = this.head;
        current = this.head.next;
        while (current != null) {
            c+=1;
            if (c === middleIndex - 1) prev.next = current.next;
            prev = prev.next;
            current = current.next;
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
}

let linked_list = new LinkedList();

linked_list.addNode(10);
linked_list.addNode(30);
// linked_list.addNode(100);
// linked_list.addNode(30);
// linked_list.addNode(30);

linked_list.display();

linked_list.removeMiddleElement();

linked_list.display()