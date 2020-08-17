function adjacentMatrixFromEdgeList(edgeList) {
  const adjacentMatrix = []

  let maxWidth = 1

  edgeList.forEach(edge => {
    const left = edge[0]
    const right = edge[1]

    if (left > maxWidth) maxWidth = left
    if (right > maxWidth) maxWidth = right

    if (!adjacentMatrix[left]) adjacentMatrix[left] = []
    if (!adjacentMatrix[right]) adjacentMatrix[right] = []

    adjacentMatrix[left][right] = 1
    adjacentMatrix[right][left] = 1
  })

  adjacentMatrix.forEach(array => {
    for(let i = 0;i < maxWidth+1; i += 1) {
      if(!array[i]) array[i] = 0
    }
  })
  return adjacentMatrix
}

const input = [[0,2], [2,3], [2,1], [1,3]]

const expected = [
  [0,0,1,0],
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0],
]
console.log('expected', expected)
console.log('results ', adjacentMatrixFromEdgeList(input))
