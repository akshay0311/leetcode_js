class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2) {

        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1)
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
} 




const graph = new Graph();

graph.addEdge(1,0);
graph.addEdge(1,2);

console.log(graph.adjacencyList);


function bfs(graph) {
    for (let keys of Object.keys(graph.adjacencyList)) {
        console.log(`Keys ${keys}`);
        console.log(`Values ${graph.adjacencyList[keys]}`)
    }
}



prerequistes(graph);
