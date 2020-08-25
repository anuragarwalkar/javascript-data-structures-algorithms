let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue'
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large'
});

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

class ProductFilter {
    filterByColor(product, color) {
        return products.filter(p => p.color === color);
    }

    filterBySize(product, size) {
        return products.filter(p => p.size === size);
    }
}



const apple = new Product('Apple', Color.green, Size.small);
const tree = new Product('Tree', Color.green, Size.large);
const house = new Product('House', Color.blue, Size.large);

const products = [apple, tree, house];

const pf = new ProductFilter();

for(let p of pf.filterByColor(products, Color.green)){
    console.log('pc:', p)
}

for(let p of pf.filterBySize(products, Size.small)){
    console.log('ps:', p)
}