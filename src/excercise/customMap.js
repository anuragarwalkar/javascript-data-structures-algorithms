class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
class CustomMap {
  constructor(size = 100) {
    this.size = size;
    this._values = [];
  }

  _hash(string) {
    let total = 0;

    for (let i = 0; i < string.length; i++) {
      total += string.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key, value) {
    if (!key) {
      return null;
    }

    const computedHash = this._hash(key);

    if (!this._values[computedHash]) {
      this._values[computedHash] = [new Node(key, value)];
    }

    return true;
  }

  get(key) {
    const computedHash = this._hash(key);

    if (!this._values[computedHash]) {
      return null;
    }
  }
}

const data = new CustomMap();

const value = data._hash("");

console.log("value:", value);
