class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            this.current = this.head;

            while (this.current.next !== null) {
                this.current = this.current.next;
            }
            this.current.next = newNode;
        }
    }

    display() {
        console.log(`d`)
        this.current = this.head;
        while (this.current !== null) {
            console.log(this.current.data);
            this.current = this.current.next;
        }
    }
}


const list = new SinglyLinkedList();

list.append("2");
list.append("4");
list.append("0");


list.display();
