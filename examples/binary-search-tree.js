console.log('binary search tree')

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  createNode(value) {
    return { value, left: null, right: null }
  }

  insert(value) {
    let parent = this.root
    if (!parent) {
      this.root = this.createNode(value)
      return
    }

    do {
      if (
    }
    while (current !== null) {
      console.log('in', current)
      current = value > this.root ? this.root.right : this.root.left
    }

    current = this.createNode(value)
    if (!this.root) {
      this.root = current
    }
  }

  lookup(value) {
    let current = this.root
    while (current.value !== value) {
      current = value > this.root ? this.root.right : this.root.left
    }
    return current
  }

  remove(value) {
  }

  print() {
    console.log(this.root)
  }
}

const tree = new BinarySearchTree()

tree.insert(50)
tree.insert(30)

tree.print()
