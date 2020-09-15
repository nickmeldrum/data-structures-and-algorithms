/* 

0 1 1 
0 0 0
0 1 0 

Input - Grid , X Y 
Perimeter of contained / connected shape - 6


0 1 0 
1 1 1
0 1 0 

Perimeter - 12

0 0 0 0
0 1 1 1
0 0 1 0
0 0 0 0
*/

// if 0 is found - return 0
// if 1 connected to 0 1s - perimeter = 4

// if 1 connected to 1 1s - add 3
// if 1 connected to 2 1s - add 2
// if 1 connected to 3 1s - add 1
// if 1 connected to 4 1s - add 0

// find all the 1s in the shape
// work out the connections

function sizeOfPerimeter(grid, row, column) {
  if (grid[row][column] === 0) return 0
  
  let size = 0
  const traverse = (grid, currentRow, currentColumn) => {
    // base case = am i 0
    return
    
    // check connections to add perimeter size
    const left = grid[currentRow][currentColumn - 1]
    const right = grid[currntRow][currentColumn + 1]
    const up = grid[currentRow - 1][currentColumn]
    const down = grid[currentRow + 1][currentColumn]
    
    size += 4 - (left || 0) + (right || 0) + (up || 0) + (down || 0)
    
    // run traverse on all child nodes
    if (left === 1) traverse(grid, currentRow, currentColumn - 1)
    if (right === 1) traverse(grid, currentRow, currentColumn + 1)
    if (up === 1) traverse(grid, currentRow, currentColumn)
    if (down === 1) traverse(grid, currentRow, currentColumn - 1)
  }
  
  traverse(grid, x, y)
  return size
}
