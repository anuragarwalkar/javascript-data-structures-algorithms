class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DublyLinkedList {
    head = null;
    tail = null;

    add(value) {
        const node = new Node(value)

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return node;
        }

        node.prev = this.tail
        this.tail.next = node;
        this.tail = node;
    }


    reverse() {
        this.head = this.tail;
        let node = this.head;

        while (node) {
            const prev = node.prev;
            node.prev = node.next;
            node.next = prev;
            node = prev;
        }

    }
}

const ls = new DublyLinkedList();

ls.add('anruag');
ls.add('sayali');
ls.add('sayali2');

ls.reverse()

