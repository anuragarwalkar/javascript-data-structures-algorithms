class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
    }

    dequeue() {
        if(!this.first) return null;

        const nextNode = this.first.next;
        const tempNode = this.first;
        if(!nextNode){
            this.first = null;
            this.last = null;
        }else{
            this.first = nextNode;
        }

        this.size--;

        return tempNode.val;
    }
}


const queuq = new Queue();

queuq.enqueue('anurag');
queuq.enqueue('rajendra');
queuq.enqueue('arwalkar');

const removed = queuq.dequeue();

console.log('removed:', removed)
console.log('queuq:', queuq);