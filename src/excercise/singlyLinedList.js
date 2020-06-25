class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
        // YOUR CODE GOES HERE
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return this;

        let node = this.head;
        let currentNode = null;
        while(node.next){
            currentNode = node;
            node = node.next;
        }
        if(!currentNode){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = currentNode;
            this.tail.next = null;
        }

        this.length--;
        return this;
    }

    get(index) {
        if(!this.head) return null;
        
        if(index > this.length) return null;

        if(index === 0 || index < 0) return this.head;

        let node = this.head;
        let counter = 0;

        while(node.next){
            if(counter === index) break;
            node = node.next;
            counter++;
        }

        return node;

    }

    insert(position, val) {
        if(!this.head) return null;

        if(position === this.length - 1) return this.push(val);

        const node = this.get(position-1);

        if(!node) return null;

        const newNode = new Node(val);
        const nextNode = node.next;
        node.next = newNode;
        newNode.next = nextNode;

        this.head - node;

        this.length++;

        return this;
    }

    rotate(byNumber){
        if(!this.head) return null;

        let previousHead = this.head;
        let previous = this.head;
        let currentNode = this.head;

        let counter = 1;

        while(currentNode.next) {
            if(counter === byNumber + 1){
                this.head = currentNode;
                previous.next = null;
                this.tail = previous;
            }

            previous = currentNode;
            currentNode = currentNode.next;

            counter++;
        }

        currentNode.next = previousHead;
        return this;
    }

    set(index, value){
        if(!this.head) return null;

        const currentNode = this.get(index - 1);

        if(!currentNode) return null;

        currentNode.val = value;

        return this;
    }
}

const SLL = new SinglyLinkedList();

let result = SLL.push('1');
result = SLL.push('2');
result = SLL.push('3');
result = SLL.push('4');
result = SLL.push('5');
// result = SLL.rotate(2);
result = SLL.set(2, 'two');

console.log('result:', result);
