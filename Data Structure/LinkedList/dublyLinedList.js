class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DublyLinedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
    }

    pop() {
        if(!this.head) return null;

        if(!this.head.next) {
            this.head = null;
            this.tail = null;
        }else{
            const previousNode = this.tail;
            this.tail = previousNode.prev;
            this.tail.next = null;
        }

        this.length--;
    }

    shift() {
        if(!this.head) return;

        if(this.head.next){
            const oldHead = this.head;
    
            this.head = oldHead.next;
            this.head.prev = null;

            oldHead.next = null;

            this.length--;

            return oldHead;
        }else{
            this.head = null;
            this.tail = null;
            this.length = 0;
        }

    }

    unshift(val) {
        if(!this.head) return this.push(val);
        
        const newNode = new Node(val);
        this.head.prev = newNode;

        newNode.next = this.head;
        this.head = newNode;
        

        this.length++;

        return newNode;
    }

    get(index){
        if(index >= this.length || index < 0)return null;

        if(index === 0) return this.head;

        const isNext = index < this.length / 2;
        
        let node = isNext ? this.head : this.tail;
        const loopIndex = isNext ? index : index - this.length;

        for (let i = 0; i < loopIndex; i++) {
            node = node[isNext ? 'next':'prev'];
        }

        return node;
    }

    set(index, val) {
        if(!this.head) return null;

        const node = this.get(index);

        if(!node) return null; 

        node.value = val;

        return node;
    }

    insert(index, node) {
        if(!this.head) return null;

        if(index === 0) return this.unshift(node);

        if(index === this.length) return this.push(node);

        const previousNode = this.get(index-1);

        if(!previousNode) return null;

        const afterNode = previousNode.next;
        const newNode = new Node(node);

        newNode.next = afterNode;
        newNode.prev = previousNode;
        previousNode.next = newNode;
        afterNode.prev = newNode

        this.length++;

        return newNode;
    }

    remove(index) {
        if(!this.head) return null;

        if(index === 0) return this.shift();

        if(index === this.length - 1) return this.pop();

        const previousNode = this.get(index-1);

        if(!previousNode) return null;

        const toDeleteNode = previousNode.next;

        const nextNode = toDeleteNode.next

        previousNode.next = nextNode;
        nextNode.prev = previousNode;

        this.length--;
    }
    
}

const dublyLinedList = new DublyLinedList();

dublyLinedList.push('anurag');
dublyLinedList.push('rajendra');
dublyLinedList.push('arwalkar');

dublyLinedList.insert(2,'bhkoba');

dublyLinedList.remove(1);
console.log('dublyLinedList:', dublyLinedList)