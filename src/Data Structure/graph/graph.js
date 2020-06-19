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
}

const graph = new Graph();

graph.addEdge('Tokyo', 'Dallas');

graph.addEdge('Dallas', 'Aspen');

graph.addEdge('Maharahtra', 'Aspen');

graph.addEdge('Bihar','Aspen');

graph.addEdge('Uttar','Aspen');

graph.addEdge('South','Aspen');

// graph.removeEdge('Tokyo', 'Dallas');

graph.removeVertex('Aspen');

console.log('graph:', graph);
