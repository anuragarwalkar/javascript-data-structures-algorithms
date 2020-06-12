class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        let current = this.head;
        let newTail = current;
        
        if (!current) return null;

        if(current.next === null){
         return this.reset(); 
        }


        while (current.next) {
            newTail = current;
            current = current.next;
        }

        newTail.next = null;
        this.tail = newTail;

        this.length--;

        return current;
    }

    shift() {
        const head = this.head;
        if(!head) return null;
        const newHead = this.head.next;

        if(!newHead) {
        this.tail = null;  
        };

        this.head = this.head.next;
        this.length--;
        
        const headCopy = {...head};
        delete head.next;
        delete headCopy.next;

        return headCopy;
    }

    unshift(val) {
        const newNode = new Node(val);

        if(!this.head) {
            this.tail = newNode;
        }else{
            newNode.next = this.head;
        };

        this.head = newNode;

        this.length++;

        return this;
    }

    reset() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;

        let link = this.head
        let whileIndex = 0;

        while(whileIndex < index){
            link = link.next;
            whileIndex++;
        }

        return link;
    }

    set(index, val) {
        if(index < 0 || index >= this.length) return null;

        let link = this.head
        let whileIndex = 0;

        while(whileIndex < index){
            link = link.next;
            if(whileIndex === index - 1){
                link.val = val;  
            }
            whileIndex++;
        }

        return { val: link.val};
    }

    insert(index, val){

        if(index < 0 || index >= this.length) return null;
        if(index === this.length) return this.push(val);
        if(index === 0) return this.unshift(val);

        let link = this.head
        let whileIndex = 0;

        while(whileIndex < index){
            link = link.next;
            whileIndex++;
        }

        const newNode = new Node(val);
        const temp = link.next
        link.next = newNode;
        newNode.next = temp;

        return newNode;
    }

    remove(index) {
        if(!this.head) return null;
        if(index === this.length -1) return this.pop();
        if(index === 0) return this.shift();

        const data = this.get(index - 1);
        const currentNode = data.next;
        const nextNode = currentNode.next;

        if(nextNode === null){
            this.tail = data;
        }

        data.next = nextNode;

        return this;
    }


    reverse() {

        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        
        let next = null;
        let prev = null;
        while(node){
            next = node.next;
            node.next = prev;
            prev = node;

            node = next;
        }

        return this;

    }
}


const first = new SinglyLinedList();
first.push('1');
first.push('2');
first.push('3');
first.push('4');
first.push('5');
first.push('6'); 

console.log(first.reverse());

// console.log('first:', JSON.stringify(first))