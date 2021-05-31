class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (this.root == null) {
      return (this.root = new Node(val));
    }
    let node = this.root;
    while (node != null && node.value !== val) {
      if (node.value < val) {
        if (node.right != null) {
          node = node.right;
        } else {
          node.right = new Node(val);
          break;
        }
      }

      if (node.value > val) {
        if (node.left != null) {
          node = node.left;
        } else {
          node.left = new Node(val);
          break;
        }
      }
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(5);
bst.insert(4);
bst.insert(8);
bst.insert(10);
bst.insert(15);
bst.insert(20);

console.log(JSON.stringify(bst.root));
