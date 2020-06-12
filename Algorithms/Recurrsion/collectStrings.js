function collectStrings(object) {
    let tempArray = [];

    for (let key in object) {
        if(object[key] instanceof Object){
            tempArray =  tempArray.concat(collectStrings(object[key]))
        }else{
            if(typeof object[key] === 'string'){
                tempArray.push(object[key]);
            }
        }
    }
    
    return tempArray;
}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const result = collectStrings(obj) // ["foo", "bar", "baz"])

console.log('result:', result)