// Implementing a LinkedList

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.printList();
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            this.append(value);
            return this.printList();
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter != index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }
    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return this.printList();
        }
        if (index >= this.length) {
            index = this.length - 1;
        }
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
// [10, 20]
myLinkedList.append(30);
// [10, 20, 30]
myLinkedList.prepend(5);
// [5, 10, 20, 30]
myLinkedList.prepend(2);
// [2, 5, 10, 20, 30]
myLinkedList.insert(4, 25);
// [2, 5, 10, 20, 25, 30]
myLinkedList.insert(3, 15);
// [2, 5, 10, 15, 20, 25, 30]
myLinkedList.insert(0, 1);
// [1, 2, 5, 10, 15, 20, 25, 30]
myLinkedList.insert(99, 40);
// [1, 2, 5, 10, 15, 20, 25, 30, 40]
myLinkedList.remove(0);
// [2, 5, 10, 15, 20, 25, 30, 40]
myLinkedList.remove(3);
// [2, 5, 10, 20, 25, 30, 40]
myLinkedList.remove(99);
// [2, 5, 10, 20, 25, 30]
