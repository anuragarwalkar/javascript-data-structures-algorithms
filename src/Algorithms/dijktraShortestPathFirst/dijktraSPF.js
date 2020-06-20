class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enquiqe(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort(){
        this.values.sort((a, b) => a.priority - b.priority);
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
                prorityQueue.enquiqe(key, Infinity);
            }else{
                prorityQueue.enquiqe(key, 0);
            }
        }

        while(prorityQueue.values.length > 0){
            let { val:vartex } = prorityQueue.dequeue();

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
                        prorityQueue.enquiqe(node, totalDisatance);
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