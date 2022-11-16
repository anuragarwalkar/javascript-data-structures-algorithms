class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % this.data.length;
    }

    set(key, value) {
        const address = this._hash(key);
        const item = [key, value];
        if (!this.data[address] || this.data[address].find(([item]) => item === key)) {
            this.data[address] = [item]
        } else {
            this.data[address].push(item)
        }
    }

    get(key) {
        const address = this._hash(key);

        if (!this.data[address]) {
            return null;
        }

        if (this.data[address].length === 1) {
            return this.data[address][0][1];
        }

        if (this.data[address].length > 1) {
            return this.data[address].find(([itemKey]) => itemKey === key)[1];
        }
    }

    keys() {
        const result = [];

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    const [key] = this.data[i][j]
                    result.push(key)
                }
            }
        }

        return result;
    }
}

const map = new HashTable(120)

map.set('firstName', 'anurag');
map.set('lastName', 'arwalkar');
map.set('address', 'nanded city');



console.log(map.keys());