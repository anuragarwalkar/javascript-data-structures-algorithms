class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {

        const newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
        } else {
            let node = this.root;

            while (node) {
                if(node.value === val) break;

                if (node.value < val) {
                    const copyNode = node.right;
                    if (copyNode) {
                        node = node.right;
                    } else {
                        node.right = newNode;
                        break
                    }
                } else {
                    const copyNode = node.left;
                    if (copyNode) {
                        node = node.left;
                    } else {
                        node.left = newNode;
                        break
                    }
                }
            }
        }

    }

    contains(val) {
        if(!this.root) return false;

        if(this.root.value === val){
            return true;
        }else{
            let node = this.root;
            while(node) {
                if(node.value === val){
                    return true;
                }

                if(val > node.value){
                    node = node.right;
                }else{
                    node = node.left;
                }

            }
        }


        return false;
    }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(7);
tree.insert(2);
tree.insert(16);
tree.insert(11);
tree.insert(3);

const result = tree.contains(16);

console.log('binarySearchTree:', tree)

console.log('result:', result)

//    10
//   5 13
// 2 7 11 16
