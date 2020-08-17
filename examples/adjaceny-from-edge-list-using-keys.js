function adjacencyFromEdgeListUsingKeys(edgeList) {
  const adjacencyList = {}

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

const input = [['g','d'], ['d','t'], ['d','z'], ['z','t']]
console.log('expected', [['d'], ['d','t'], ['g','z','t'], ['z','d']])
console.log('results ', adjacencyFromEdgeListUsingKeys(input))
