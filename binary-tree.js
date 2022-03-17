class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addChild(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    else {
      let currentNode = this.root;
      let added = false;

      while (!added && currentNode) {
        if (value === currentNode.value) {
          return "Duplicate nodes not allowed.";
        }

        if (value < currentNode.value) {
          if (!currentNode.leftChild) {
            currentNode.leftChild = new Node(value);
            added = true;
          }
          else {
            currentNode = currentNode.leftChild;
          };
        } else if (value > currentNode.value) {
          if (!currentNode.rightChild) {
            currentNode.rightChild = new Node(value);
            added = true;
          }
          else {
            currentNode = currentNode.rightChild;
          }
        }
      }
    }
  }

  removeChild(value) {
    let currentNode = this.root;
    let nodeToRemove;
    let parentNode = null;

    while (!nodeToRemove) {
      if (!currentNode || !currentNode.value) {
        return "The node was not found.";
      }

      if (value === currentNode.value) {
        nodeToRemove = currentNode;
      }
      else  {
        parentNode = currentNode;
        currentNode = value < currentNode.value ? currentNode.leftChild : currentNode.rightChild;
      }
    }

    const nodeToRemoveIsParentsLeftChild = parentNode.leftChild === nodeToRemove;

    // If nodeToRemove is a leaf node, remove it
    if (!nodeToRemove.leftChild && !nodeToRemove.rightChild) {
      if (nodeToRemoveIsParentsLeftChild) {
        parentNode.leftChild = null;
      }
      else {
        parentNode.rightChild = null;
      }
    }

    else if (nodeToRemove.leftChild && !nodeToRemove.rightChild) {
      // Only has left child
      if (nodeToRemoveIsParentsLeftChild) {
        parentNode.leftChild = nodeToRemove.leftChild;
      }
      else {
        parentNode.rightChild = nodeToRemove.leftChild;
      }
    }

    else if (!nodeToRemove.leftChild && nodeToRemove.rightChild) {
      // Only has right child
      if(nodeToRemoveIsParentsLeftChild) {
        parentNode.leftChild = nodeToRemove.rightChild;
      }
      else {
        parentNode.rightChild = nodeToRemove.rightChild;
      }
    }

    else {
      // Has two children
      const leftSubtree = nodeToRemove.leftChild;
      const rightSubtree = nodeToRemove.rightChild;

      // Set parent node's respective child to the right sub tree
      if (nodeToRemoveIsParentsLeftChild) {
        parentNode.leftChild = rightSubtree;
      }
      else {
        parentNode.rightChild = rightSubtree;
      }

      // Find lowest open space on the left side of the right right subtree and add leftSubTree
      let currLeftNode = rightSubtree;
      let currLeftParent;
      let foundSpace = false;

      while (!foundSpace) {
        if (!currLeftNode) {
          foundSpace = true;
        }
        else {
          currLeftParent = currLeftNode;
          currLeftNode = currLeftNode.leftChild;
        }
      }

      currLeftNode.leftChild = leftSubtree;
      return "The node was succesfully deleted.";
    }
  }
}

let binaryTree = new BinaryTree();
binaryTree.addChild(1);
binaryTree.addChild(2);
binaryTree.addChild(3);
binaryTree.addChild(4);
binaryTree.addChild(5);
console.log(binaryTree);