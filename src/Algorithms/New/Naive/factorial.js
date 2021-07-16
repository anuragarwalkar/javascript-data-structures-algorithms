const fact = (number) => {
    let val = 1;
    for(let i = val; i <= number; i++) {
        val = val * i;
    }

    return val;
}



const result = fact(5);

console.log('result:', result)