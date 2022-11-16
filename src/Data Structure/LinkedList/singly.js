class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    head = null;
    tail = null;

    add(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return node;
        }

        this.tail.next = node;
        this.tail = node;
    }

    find(value) {
        let node = this.head;

        while (node) {
            if (node.value === value) {
                return node;
            }
            node = node.next
        }

        return null;
    }

    remove(value) {
        let node = this.head;
        let before = null;
        let after = null;

        while (node) {
            if (node.value === value) {
                after = node.next
                break;
            }
            before = node;
            node = node.next
        }

        if (!before && !after) {
            this.head = null;
        } else {
            before.next = after;
        }


        return !!(before && after);
    }

    prepend(value) {
        const node = new Node(value)
        node.next = this.head;
        this.head = node;
    }

    reverse() {
        let node = this.head;
        let prev = null;
        let next = null;

        while (node) {
            next = node.next;
            if (!prev) {
                this.tail = node;
            }
            node.next = prev;
            node = next;
        }

    }

}


const list = new LinkedList()

list.add('ashwini');
list.prepend('anurag');

list.reverse();

console.log('list:', list);