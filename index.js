class Graph {
    adjacencyList = {

    }

    addVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            return
        }
        this.adjacencyList[vertex] = [];
    }
}

const graph = new Graph();

graph.addVertex("Tokeyo")

