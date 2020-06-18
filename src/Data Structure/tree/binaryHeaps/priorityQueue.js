class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority)
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const { priority:element } = this.values[index];

        while(index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const { priority:parent } = this.values[parentIndex];
            if(element >= parent) break;
            [this.values[index], this.values[parentIndex]] = 
            [this.values[parentIndex], this.values[index]] 
            index = parentIndex;
        }
    }

    dequeue() {
        const [max] = this.values;
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return end;
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const [{ priority:element }] = this.values;
        const [firstValue] = this.values;

        while(true) {
            const leftChildIndex = (2 * index) + 1;
            const rightChildIndex = (2 * index) + 2;
            let leftChild = null;
            let rightChild = null;
            let swap = null;

            if(leftChildIndex < length){
                const { priority } = this.values[leftChildIndex];
                leftChild = priority;
                if(leftChild < element) {
                    swap = leftChildIndex;
                }
            }

            if(rightChildIndex < length){
                const { priority } = this.values[rightChildIndex];
                rightChild = priority;
                if(
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }
            if(swap === null) break;

            this.values[index] = this.values[swap];
            this.values[swap] = firstValue;

            index = swap;
        }
    }
}

const data = new PriorityQueue()

data.enqueue('anurag', 1);
data.enqueue('saurabh', 4);
data.enqueue('shreyas', 3);
data.enqueue('sheya', 2);
data.dequeue();
data.dequeue();


console.log('data:', data)