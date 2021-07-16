
const knapsackFn = (items, cap, index, memo) => {
    if(memo[cap][index]) {
        return memo[cap][index];
    }

    if(cap === 0 || index < 0) {
        return { items: [], value: 0, weight: 0 }
    }

    if(cap < items[index].weight) {
        return knapsackFn(items, cap, (index - 1), memo)
    }

    const sackWithItems = knapsackFn(items, cap - items[index].weight, index - 1, memo)

    const sackWithoutItem = knapsackFn(items, cap, index - 1, memo);

    const valueWithItem = sackWithItems.value + items[index].value;
    const valueWithoutItem = sackWithoutItem.value;

    let resultSack = null;
    if(valueWithItem > valueWithoutItem) {
        resultSack = {
            items: sackWithItems.items.concat(items[index]),
            value: sackWithoutItem.value + items[index].value,
            weight: sackWithoutItem.weight + items[index].weight,
        }
    }else {
        resultSack = sackWithoutItem;
    }
    memo[cap][index] = resultSack;
    
    return resultSack;
}

const items = [
    { name: 'a', value: 3, weight: 3 },
    { name: 'b', value: 6, weight: 8 },
    { name: 'c', value: 10, weight: 3 }
];

const maxCap = 8;

const knapsack = (items, maxCap, index) => {
    const memo = Array.from(Array(maxCap + 1), () => Array(items.length).fill(undefined))
    return knapsackFn(items, maxCap, index, memo);
}

const result = knapsack(items, maxCap, (items.length - 1));

console.log('result:', result)