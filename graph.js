class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class Graph {
  constructor(directed = false) {
    this.directed = directed;
    this.nodes = [];
  }

  addNode(value) {
    this.nodes.push(new Node(value));
  }

  // TODO: refactor?
  removeNode(value) {
    this.nodes.forEach((node, index) => {
      if (node.value === value) {
        this.nodes.splice(index, 1);
      }
      else {
        // Remove any edges for the node being removed
        node.edges.filter(edge => edge.value !== value);
      }
    });
  }

  getNode(value) {
    return this.nodes.find(node => node.value === value);
  }

  addEdge(value1, value2) {
    const node1 = this.getNode(value1);
    const node2 = this.getNode(value2);

    node1.edges.push(node2);

    if (!this.directed) {
      node2.edges.push(node1);
    }

    return `An edge between ${node1.value} and ${node2.value} was added.`;
  }
}

let graph = new Graph();
graph.addNode("a");
graph.addNode("b");
graph.addNode("c");
graph.addNode("d");
graph.addNode("e");
graph.addNode("f");

console.log(graph.getNode("a"));

graph.addEdge("a", "b");
graph.addEdge("a", "f");
graph.addEdge("b", "e");
graph.addEdge("e", "c");
graph.addEdge("e", "b");
graph.addEdge("a", "d");


graph.removeNode("b");

console.log(graph);