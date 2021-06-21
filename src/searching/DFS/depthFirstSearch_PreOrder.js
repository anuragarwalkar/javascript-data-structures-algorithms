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

  find(val) {
    if (this.root == null) {
      return null;
    }

    let node = this.root;

    while (node != null && node.value !== val) {
      if (node.value < val) {
        node = node.right;
      } else if (node.value > val) {
        node = node.left;
      }
    }

    return node;
  }

  contains(val) {
    return !!this.find(val);
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

  DFS() {
    let data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.right) traverse(node.right);
      if (node.left) traverse(node.left);
    }

    traverse(this.root);

    return data;
  }
}

const bst = new BinarySearchTree();

bst.insert(5);
bst.insert(4);
bst.insert(8);
bst.insert(10);
bst.insert(15);
bst.insert(20);

console.log(bst.DFS());
