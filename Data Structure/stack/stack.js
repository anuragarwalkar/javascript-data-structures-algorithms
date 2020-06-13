class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }else{
            const temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }

        return ++this.size;
    }

    pop(){
        if(!this.first) return null;

        if(!this.first.next){
            const copy =  this.first;
            this.first = null;
            this.last = null;
            this.size--;
            return copy;
        }

        const tempNode = this.first;
        const nextNode = this.first.next;
        this.first = nextNode;

        this.size--;
        return tempNode.val;
    }
}

const stack = new Stack();

stack.push('1');
const result = stack.push('2');

const result2 = stack.pop();
// const newResult = stack.pop();
console.log('newResult:', result2)
console.log('stack:', stack);