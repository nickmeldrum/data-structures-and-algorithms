class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(name) {
    if (this.adjacencyList[name] === undefined) {
      this.adjacencyList[name] = new Set()
    }
  }

  addEdge(a, b) {
    if (this.adjacencyList[a] === undefined || this.adjacencyList[b] === undefined) {
      throw new Error(`vertex ${a} or ${b} not defined`)
    }

    this.adjacencyList[a].add(b)
    this.adjacencyList[b].add(a)
  }

  display() {
    Object.entries(this.adjacencyList).forEach(([v, l]) => {
      console.log(`Vertex: ${v} ===> ${l}`)
    })
  }
}

const x = new Graph()

x.addVertex(1)
x.addVertex(2)
x.addVertex(3)

x.addEdge(1, 2)
x.addEdge(1, 3)

x.display()
