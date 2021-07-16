const fib = (index) => {
    const numbers = [1, 1];
   
    for(let i = 2; i <= index; i++) {
        numbers.push(numbers[i-1] + numbers[i - 2]);
    }

    return numbers[index];
}

console.log('fib(4):', fib(5))