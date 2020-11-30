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

class Coordinate {
  constructor(grid, row, column) {
    this.grid = grid
    this.row = row
    this.column = column
  }

  hashKey() {
    return `${this.row},${this.column}`
  }

  value() {
    const rowArray = this.grid[this.row]
    if (!rowArray) return 0
    const value = rowArray[this.column]
    return value === undefined ? 0 : value
  }

  leftCoord() {
    return new Coordinate(this.grid, this.row, this.column - 1)
  }

  rightCoord() {
    return new Coordinate(this.grid, this.row, this.column + 1)
  }

  upCoord() {
    return new Coordinate(this.grid, this.row - 1, this.column)
  }

  downCoord() {
    return new Coordinate(this.grid, this.row + 1, this.column)
  }

  perimSize() {
    return 4 - (this.leftCoord.value() + this.rightCoord.value() + this.upCoord.value() + this.downCoord.value())
  }
}

function sizeOfPerimeter(grid, row, column) {
  if (coord.value() === 0) return 0
  
  let size = 0
  let visited = new Set()

  const traverse = (coord) => {
    // only visit everywhere once
    if (visited.has(coord.hashKey())) return
    visited.add(coord.hashKey())

    // check connections to add perimeter size
    const left = coord.leftCoord()
    const right = coord.rightCoord()
    const up = coord.upCoord()
    const down = coord.downCoord()

    size += coord.perimSize()
    
    // run traverse on all child nodes that are part of the shape
    if (left.value() === 1) traverse(left)
    if (right.value() === 1) traverse(right)
    if (up.value() === 1) traverse(up)
    if (down.value() === 1) traverse(down)
  }

  traverse(new Coordinate(grid, row, column))

  return size
}


const grid1 = [
  [0, 1, 1,], 
  [0, 0, 0,],
  [0, 1, 0,], 
]

console.log(sizeOfPerimeter(grid1, 0, 0), 0)
console.log(sizeOfPerimeter(grid1, 2, 1), 4)
console.log(sizeOfPerimeter(grid1, 0, 2), 6)
