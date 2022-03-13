class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head = null;
  tail = null;

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    }

    this.tail.next = node;
    this.tail = node;
  }

  reverse() {
    let current = this.head;
    let next = null;
    let prev = null;

    while (current) {
      next = current.next;

      current.next = prev;

      if (!prev) {
        this.tail = current;
      }

      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const ls = new LinkedList();

ls.add(1);
ls.add(2);
ls.add(3);
ls.add(4);
ls.add(5);
