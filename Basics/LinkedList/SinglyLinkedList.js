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
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

function displayLinkedList() {
    const list = new SinglyLinkedList();
    list.append("2");
    list.append("4");
    list.append("0");


    list.display();
}

// only execute this when the file is executed 
if (require.main === module) displayLinkedList();

module.exports = SinglyLinkedList;
