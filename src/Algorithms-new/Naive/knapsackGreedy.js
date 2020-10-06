const kanapsack = (items, capacity) => {
    const sack = {items: [], value: 0, weight: 0};
    let remainingCapacity = capacity

    for(const item of items) {
        if(item.weight <= remainingCapacity) {
            sack.items.push(item);
            sack.value += item.value;
            sack.weight += item.weight;
            remainingCapacity -= item.weight;
        }
    }

    return sack;
}

const items = [
    { name: 'b', value: 6, weight: 8 },
    { name: 'a', value: 3, weight: 3 },
    { name: 'c', value: 10, weight: 3 }
];

const maxCap = 8;

const result = kanapsack(items, maxCap);

console.log('result:', result)

