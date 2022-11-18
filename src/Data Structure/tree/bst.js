class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
    root = null;

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let node = this.root;
        while (node) {
            if (value < node.value) {
                if (node.left === null) {
                    node.left = newNode;
                    break;
                }
                node = node.left;
            }

            if (value > node.value) {
                if (node.right === null) {
                    node.right = newNode;
                    break;
                }
                node = node.right;
            }
        }
    }

    lookup(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }

            if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
        }

        return null;
    }

    remove(value) {
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.left && currentNode.left.value === value) {
                currentNode.left = currentNode.left.left
                return this.root;
            }

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }

            if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
        }
    }
}

const bst = new BST();

bst.insert(20);
bst.insert(10);
bst.insert(25);
bst.insert(8);
bst.remove(10);

console.log('bst.root:', bst);