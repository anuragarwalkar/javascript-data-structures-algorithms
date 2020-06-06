const merge = (array1, array2) =>{
    const mergedArray = [];
    for(let i = 0; i < array1.length; i++){

        for(let j = 0; j < array2.length; j++){
            if(array1[i] < array2[j]){
                mergedArray.push(array1[i]);
                array1.splice(0, 1);
                break;
            }else{
                mergedArray.push(array2[j]);
                array2.splice(0, 1);
            }
        }
    }

    return [...mergedArray,...array1, ...array2];
}


const result = merge([1, 10, 50], [2, 14, 99, 100]);

console.log('result:', result);