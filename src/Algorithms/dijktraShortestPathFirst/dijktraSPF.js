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
        return max;
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

class WeigthedGraph {
    constructor() {
        this.adjacencyList = { };
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertexOne, vertexTwo, weight) {
        this.adjacencyList[vertexOne].push({ node: vertexTwo, weight })
        this.adjacencyList[vertexTwo].push({ node: vertexOne, weight })
    }

    
    SPF(startingVartex, endingVartex) {
        const prorityQueue = new PriorityQueue();
        const distances = { }; 
        const previous = { };
        const path = [];
        for (const key in this.adjacencyList) {
            const isStarting = startingVartex === key;
            const vartexResult = isStarting ? 0 : Infinity;
            distances[key] =  vartexResult;
            previous[key] = null;
            if(vartexResult != 0){
                prorityQueue.enqueue(key, Infinity);
            }else{
                prorityQueue.enqueue(key, 0);
            }
        }

        while(prorityQueue.values.length > 0){
            let { value:vartex } = prorityQueue.dequeue();

            if(vartex === endingVartex){
                while(previous[vartex]){
                    path.push(vartex);
                    vartex = previous[vartex];
                }
                break;
            }

            if(vartex || distances[vartex] != Infinity){
                for(const list of this.adjacencyList[vartex]){
                    const { weight, node } = list;
                    const totalDisatance = distances[vartex] + weight;
                    if(totalDisatance < distances[node]){
                        distances[node] = totalDisatance;
                        previous[node] = vartex;
                        prorityQueue.enqueue(node, totalDisatance);
                    }
                }
            }
        }
        return path.concat(startingVartex).reverse();
    }
}

const graph = new WeigthedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

const result = graph.SPF('A', 'E');


console.log('graph:', result);