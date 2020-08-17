function adjacencyFromEdgeList(edgeList) {
  const adjacencyList = []

  edgeList.forEach(edge => {
    if (!adjacencyList[edge[0]]) adjacencyList[edge[0]] = []
    if (!adjacencyList[edge[1]]) adjacencyList[edge[1]] = []

    if (!adjacencyList[edge[0]].includes(edge[1]))
      adjacencyList[edge[0]].push(edge[1])

    if (!adjacencyList[edge[1]].includes(edge[0]))
      adjacencyList[edge[1]].push(edge[0])
  })
  return adjacencyList
}

const input = [[0,2], [2,3], [2,1], [1,3]]
console.log('expected', [[2], [2,3], [0,1,3], [1,2]])
console.log('results ', adjacencyFromEdgeList(input))
