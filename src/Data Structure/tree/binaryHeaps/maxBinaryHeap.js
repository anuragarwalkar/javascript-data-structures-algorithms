class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if(element <= parent) break;
            [this.values[index], this.values[parentIndex]] = 
            [this.values[parentIndex], this.values[index]] 
            index = parentIndex;
        }
    }

    remove() {
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
        const [element] = this.values;

        while(true) {
            const leftChildIndex = (2 * index) + 1;
            const rightCildIndex = (2 * index) + 2;
            let leftChild = null;
            let rightChild = null;
            let swap = null;

            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex];
                if(leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if(rightCildIndex < length){
                rightChild = this.values[rightCildIndex];
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightCildIndex;
                }
            }
            if(swap === null) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;

            index = swap;
        }
    }
}

const data = new MaxBinaryHeap()

data.insert(41);
data.insert(39);
data.insert(33);
data.insert(18);
data.insert(27);
data.insert(12);
data.insert(55);
data.remove();


console.log('data:', data)