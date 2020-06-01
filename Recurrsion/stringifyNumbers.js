function stringifyNumbers(object) {
    const TempObject = {};

    for(let key in object){
        if(object[key] instanceof Object && !Array.isArray(object[key])){
          return { ...TempObject, ...stringifyNumbers(object[key])};  
        }else{
            if(typeof object[key] === 'number'){
                TempObject[key] = object[key].toString();
                delete object[key];
            }else{
                TempObject[key] = object[key];
                delete object[key];
            }
        }
    }

    return TempObject
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

const result = stringifyNumbers(obj);

console.log('result:', result);
