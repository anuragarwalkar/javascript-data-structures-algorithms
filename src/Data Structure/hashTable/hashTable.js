class HashTable {
    constructor(size = 53) {
        this.keyMap = Array.from({length:53},()=> ([]));
    }

    _hash(key) {
        let total = 0;
        const wiredPrime = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            const value = key[i];
            let result = value.charCodeAt(0) - 96;
            total = (total + wiredPrime + result) % this.keyMap.length;
        }
    
        return total;
    }

    set(key, value){
        const hashed = this._hash(key);
        
        this.keyMap[hashed].push([key, value]);
    }

    get(key) {
    const hashed = this._hash(key);
    if(!hashed) return null;
    for (const item of this.keyMap[hashed]) {
        const [itemKey] = item;
        if(itemKey === key) return item;
    }
    return null
    }

    values () {
        const valuesArray = [];

        for (const iterator of this.keyMap) {
            if(iterator.length === 0 || !iterator) continue;

            for(const item of iterator){
                const [_, lastIndex] = item;
                if(!valuesArray.includes(lastIndex))
                valuesArray.push(lastIndex);
            }    
        }

        return valuesArray;
    }

    keys() {
        const valuesArray = [];

        for (const iterator of this.keyMap) {
            if(iterator.length === 0 || !iterator) continue;

            for(const item of iterator){
                const [firstIndex] = item;
                if(!valuesArray.includes(firstIndex))
                valuesArray.push(firstIndex);
            }    
        }

        return valuesArray; 
    }
}

const result = new HashTable();

result.set('name', 'anurag');
result.set('fullName', 'anurag');

result.set('lastName', 'arwalkar');

console.log('keys:', result.values());
console.log('values:', result.keys());

