const isPrime = (number) => {
    for(let i = 2; i < Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false
        }
    }
 
    return true;
 }
 
 const result = isPrime(27277);
 // const anotherResult = isPrime(9);
 
 console.log('result:', result)