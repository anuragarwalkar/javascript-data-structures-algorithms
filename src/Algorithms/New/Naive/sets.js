const cartProduct = (setA, setB) => {
    const products = [];

    for (const a of setA) {
        for (const b of setB) {
            products.push([a, b]);
        }
    }

    return products;
}

const colors = ['blue', 'red'];
const sizes = ['m', 'l'];

const result = cartProduct(colors, sizes);

console.log('result:', result)