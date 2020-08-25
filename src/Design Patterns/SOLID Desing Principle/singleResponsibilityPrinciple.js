const fs = require('fs');

class Journal {
    entries = {};
    constructor() {
        // this.
    }

    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c}: ${text}`
        this.entries[c] = entry;
        return c;
    }

    removeEntries(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }
    
}


class PersistanceManager {
    saveToFile(journal, filename) {
        fs.writeFileSync(filename, journal.toString());
    }

    preprocess(journal) {

    }

    save(filename) {
        fs.writeFileSync(filename, this.toString())
    }

    load(filename) {

    }

    loadFromUrl(url) {
        
    }
}

Journal.count = 0


const result = new Journal();

result.addEntry('i eat a coconut');
result.addEntry('i eat a spoon');

console.log('result:', result.toString())

