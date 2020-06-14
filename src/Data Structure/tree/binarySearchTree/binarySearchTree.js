class Node {
    constructor(value){
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

        if(!this.root) {
            this.root = newNode;
        }else{
            let node = this.root;

            while(node){
                if(node.value < val){
                    const copyNode = node.right;
                    if(copyNode){
                        node = node.right;
                    }else{
                        node.right = newNode;
                        break
                    }
                }else{
                    const copyNode = node.left;
                    if(copyNode){
                        node = node.left;
                    }else{
                        node.left = newNode;
                        break
                    }
                }    
            }
        }

    }
}

const tree = new BinarySearchTree();

tree.insert(10);

tree.insert(15);
tree.insert(8);
tree.insert(7);
tree.insert(6);
tree.insert(12);
tree.insert(20);



 console.log('binarySearchTree:', tree)