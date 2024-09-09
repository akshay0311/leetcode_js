const LinkedList = require("./SinglyLinkedList.js");


class ReverseSinglyLinkedList {
    constructor(list) {
        this.head = list.head;
    }
    reverse() {
        let current = this.head;
        let ahead = current.next;
        this.head.next = null;
        while(ahead !== null) {
            console.log(1);
            let temp = ahead;
            ahead = ahead.next
            temp.next = current;
            current = temp;
        }
        this.head = current;
    }
    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}


const list = new LinkedList();
list.append(2);
list.append(200);
list.append(120);
list.append(20);
list.append(100);
list.append(210);

const reverseList = new ReverseSinglyLinkedList(list);
reverseList.reverse();
reverseList.display();

