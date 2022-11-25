class Graph {
    adjacencyList = {

    }

    addVertex(name) {
        if(!name) return;
        this.adjacencyList[name] = [];
    }
}

const g = new Graph();

g.addVertex('')

