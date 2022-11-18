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
        let parentNode = null;

        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            }

            if (currentNode.value === value) {

                // Option 1
                if (currentNode.right === null) {
                    if (parentNode.value < currentNode.value) {
                        parentNode.right = currentNode.left;
                    }

                    if (parentNode.value > currentNode.value) {
                        parentNode.left = currentNode.left;
                    }
                    return true;
                }

                // Option 2
                if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;

                    if (currentNode.value > parentNode.value) {
                        parentNode.right = currentNode.right;
                    }

                    if (currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.right;
                    }

                    return true;
                }

                // Option 3
                let leftMost = currentNode.right.left;
                let leftMostParent = currentNode.right;

                while (leftMost.left) {
                    leftMostParent = leftMost;
                    leftMost = leftMost.left;
                }

                leftMostParent.left = leftMost.right
                leftMost.left = currentNode.left;
                leftMost.right = currentNode.right;

                if (currentNode.value < parentNode.value) {
                    parentNode.left = leftMost;
                }

                if (currentNode.value > parentNode.value) {
                    parentNode.right = leftMost;
                }

                return true;


            }
        }
    }
}

const bst = new BST();

bst.insert(20);
bst.insert(10);
bst.insert(8);
bst.insert(7);
bst.insert(9);
bst.insert(11);
bst.insert(12);
bst.insert(25);
bst.insert(24);
bst.insert(30);
bst.insert(23);


bst.remove(24);

console.log('bst.root:', bst.root.right.left);