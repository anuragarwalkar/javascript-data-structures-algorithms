function nestedEvenSum(nestedObject) {
    // add whatever parameters you deem necessary - good luck!
    let sum = 0;
    for(let key in nestedObject){
        // console.log('key:', key);
        if(nestedObject[key] instanceof Object) {
           sum += nestedEvenSum(nestedObject[key]);
        }else{
            if (typeof nestedObject[key]  === 'number' && nestedObject[key] % 2 === 0){
                const result = nestedObject[key];
                delete nestedObject[key];
                sum += result;
            }
        }
    }

    return sum

  }
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

const result = nestedEvenSum(obj1);

console.log('result:', result)