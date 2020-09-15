class BinarySearchTree {
  constructor() {
    this.root = null
  }

  createNode(value) {
    return { value }
  }

  insert(value) {
    let parent = this.root
    if (parent === null) {
      this.root = this.createNode(value)
      return
    }

    let current = parent
    do {
      parent = current
      current = value > parent.value ? parent.right : parent.left
    } while (current !== undefined)

    if (value > parent.value) {
      parent.right = this.createNode(value)
    } else {
      parent.left = this.createNode(value)
    }
  }

  lookup(value) {
    let current = this.root
    while (current.value !== value) {
      current = value > current.value ? current.right : current.left
    }
    return current
  }

  nodeIsLeaf(node) {
    return node.left === undefined && node.right === undefined
  }
  
  remove(value) {
    if (!this.root) return

    if (this.root.value == value) {
      this.root == null
      return
    }

    let current = this.root
    let parent
    while (true) {
      if (value === current.value) {
        // found
        break
      }
      else if (value > current.value) {
        parent = current
        current = current.right
      } else {
        parent = current
        current = current.left
      }
    }

    if (this.nodeIsLeaf(current)) {
      if (value > parent.value) {
        delete parent.right
      } else {
        delete parent.left
      }
    } else {
    }
  }

  print() {
    console.log(this.root)
  }

  depthFirstSearch(func) {
    const traverseInOrder = node => {
      if (node.left) {
        traverseInOrder(node.left)
      }

      func(node)

      if (node.right) {
        traverseInOrder(node.right)
      }
    }

    traverseInOrder(this.root, [])
  }
}

const tree = new BinarySearchTree()

tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(1)
tree.insert(6)
tree.insert(170)
tree.insert(15)

tree.print()
tree.depthFirstSearch(node => console.log('node', node.value));

