class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    thisadjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(w);
  }
}
