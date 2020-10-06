const fact = (number) => {
    if (number === 1) {
        return 1;
    }

    return number * fact(number - 1);
}

const result = fact(5);


console.log('result:', result)