class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vartex) {
        this.adjacencyList[vartex] = [];
    }

    addEdge(key, value) {
        const listKey = this.adjacencyList[key];
        const listValue = this.adjacencyList[value];

        if(listKey){
            listKey.push(value);
        }else{
            this.adjacencyList[key] = [value]; 
        }

        if(listValue){
            listValue.push(key);
        }else{
            this.adjacencyList[value] = [key]; 
        }
    }

    removeEdge(key, value) {
        const vartexOne = this.adjacencyList[key];
        const vartexTwo = this.adjacencyList[value];

        if(vartexOne){
            const vartextOneIndex = vartexOne.indexOf(value);  
            if(vartextOneIndex != -1) vartexOne.splice(vartextOneIndex, 1);
        }

        if(vartexTwo){
            const vartextTwoIndex = vartexTwo.indexOf(key);  
            if(vartextTwoIndex != -1) vartexTwo.splice(vartextTwoIndex, 1);
        }
    }

    removeVertex(vartex) {
        for (const key in this.adjacencyList) {
            const result = this.adjacencyList[key];
            this.adjacencyList[key] = result.filter(item => item != vartex);
        }

        delete this.adjacencyList[vartex];
    }

    DFS(startingNode) {
        const results = [];
        const visitedVertices = { };
        
        const innerDFS = (vartex) => {
            if(!vartex) return;
            visitedVertices[vartex] = true;
            results.push(vartex);

            for(let item of this.adjacencyList[vartex]) {
                if(!visitedVertices[item]){
                    innerDFS(item);
                }
            }

        }

        innerDFS(startingNode);

        return results;
    }

    DFSIterative(start) {
        let s = [];
        const results = [];
        const visited = {};
        s.push(start);
        
        while(s.length > 0){
            const vertex = s.pop();
            
            if(visited[vertex]) continue;

            results.push(vertex);
            visited[vertex] = true;

            for (const iterator of this.adjacencyList[vertex]) {
                s.push(iterator);
            }

        }


        return results;
    }

    BFS(startVartex) {
        const result = [];
        const queue = [startVartex];
        const visited = {};

        visited[startVartex] = true;

        while(queue.length > 0) {
            const firstVartex = queue.shift();
            result.push(firstVartex);

            for (const item of this.adjacencyList[firstVartex]) {
                if(!visited[item]){
                    visited[item] = true;
                    queue.push(item);
                }
            }
            
        }

        return result;
    }
}

const graph = new Graph();

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

// const dfs = graph.DFS('A');
const bfs = graph.BFS('A');

console.log('graph:', bfs);
