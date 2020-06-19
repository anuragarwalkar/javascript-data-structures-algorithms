const x = { }

const a = { }

const b = { num: 1, num2: 2 }

x[a] = 'a';
x[b] = 'b';

const map = new Map();

map.set(a, 'anurag');
map.set(b, 'arwalkar');
map.set(a, 'thinkPad');

// for (const [key, value] of map.entries()) {
//     console.log('key:', key)
//     console.log('value:', value)
// }

const array = [...map]

console.log('array:', array)

