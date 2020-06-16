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

    BFS(){
        const node = this.root;

        if(!node) return null;

        const queue = [node];
        const visited = [];

        while(queue.length > 0) {
            const [newNode] = queue.slice(0);
            visited.push(newNode.value);

            if(newNode.left){
                queue.push(newNode.left);
            }

            if(newNode.right){
                queue.push(newNode.right);
            }

            queue.shift();
        }

        return visited;
    }

    DFS() {
        const node = this.root;

        const visited = [];

        const recursion = (node) => {
            if(node.left){
                recursion(node.left);
            }
            
            if(node.right){
                recursion(node.right);
            }

            visited.push(node.value);
        }

        recursion(node);

        return visited;

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

const resultBFS = tree.BFS();
const resultDFS = tree.DFS();

console.log('result:', resultDFS);

console.log('binarySearchTree:', tree)

//    10
//   5 13
// 2 7 11 16
