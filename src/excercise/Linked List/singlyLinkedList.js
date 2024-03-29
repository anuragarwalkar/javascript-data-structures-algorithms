class Node {
  value = null;
  nextNode = null;

  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class SinglyLinedList {
  head = null;
  tail = null;
  length = 0;

  constructor() {}

  insert(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }

    this.length++;
    return node;
  }

  insertAfter(value, nextNodeVal) {
    if (!this.head) {
      this.insert(value);
    } else {
      const node = this.getNode(value);

      if (!node) {
        return node;
      }

      const nextNode = node.nextNode;

      const newNode = new Node(nextNodeVal, nextNode);

      if (!newNode.nextNode) {
        this.tail = newNode;
      }

      node.nextNode = newNode;

      this.length++;
      return node;
    }
  }

  getNode(value = null, prev = false, last = false) {
    let node = this.head;

    while (node) {
      if (prev && node.nextNode) {
        if (
          node.nextNode.value === value ||
          (last && node.nextNode.nextNode === null)
        ) {
          break;
        }
      }

      if (node.value === value) {
        break;
      }

      node = node.nextNode;
    }

    return node;
  }

  deleteNode(value) {
    if (!this.head) {
      return;
    } else {
      const prevNode = this.getNode(value, true);

      if (!prevNode) {
        return nodeToDelete;
      }

      const newNextNode = prevNode.nextNode;

      const newNexNextNode = newNextNode.nextNode;

      prevNode.nextNode = newNexNextNode;

      if (newNexNextNode === null) {
        this.tail = prevNode;
      }

      this.length--;
    }
  }

  printAllNode() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.nextNode;
    }
  }

  reverse() {
    let next = null;
    let prev = null;
    let current = this.head;

    while (current) {
      next = current.nextNode;
      current.nextNode = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  pop() {
    if (!this.head) {
      return;
    }

    const secondLastNode = this.getNode(null, true, true);

    if (secondLastNode) {
      secondLastNode.nextNode = null;
      this.tail = secondLastNode;
    } else {
      this.head = secondLastNode;
      this.tail = secondLastNode;
    }

    return secondLastNode;
  }
}

const sl = new SinglyLinedList();

sl.insert("anurag");

sl.insert("rajendra");

sl.insert("arwalkar");

sl.insert("dell");

sl.insertAfter("arwalkar", "engineer");

sl.insert("vscode");

sl.insertAfter("vscode", "newExt");

sl.insert("developing");

sl.insert("developingNew");

sl.deleteNode("developingNew");

sl.insert("python");

sl.reverse();

sl.pop();

sl.printAllNode();
