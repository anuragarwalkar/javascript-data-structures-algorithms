const fib = (number) => {
    let counter = 0;

    const fibFn = (number, memo) => {
        counter++;

        if (number <= 1) {
            return 1;
        }
    
        let first;
        let second;
    
        if(memo[number - 1]) {
            first = memo[number - 1];
        }else {
            first = fibFn(number - 1, memo);
            if(!isNaN(first)) {
                memo[number - 1] = first;
            }
        }
    
        if(memo[number - 2]) {
            second = memo[number - 2];
        }else {
            second = fibFn(number - 2, memo);
            if(!isNaN(second)) {
                memo[number - 1] = second;
            }
        }
    
        return first + second;
    }

    const returnedVal =  fibFn(number, {});
    console.log('counter:', counter)
    return returnedVal;
}



const result = fib(30);


console.log('result:', result);