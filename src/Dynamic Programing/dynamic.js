// Memoization
const fib_memo = (n, memo = [undefined, 1, 1]) => {
    if(memo[n] != undefined) return memo[n];
    const value =  fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = value;
    return value;
}


const fib_tablulation = (n) => {
    if(n <= 2) return 1
    const array = [0, 1, 1];
    for (let index = 3; index <= n; index++) {
        array[index] = array[index - 1] + array[index - 2];
    }
    return array[n];
}

const result = fib_tablulation(100);

console.log('result:', result);