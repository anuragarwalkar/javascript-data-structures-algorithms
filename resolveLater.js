// function flatten(outArray) {
//     let temp = [];
//     function innterFlatten(array){
//         for(i = 0; i < array.length; i++){
//            if(Array.isArray(array[i])){
//            innterFlatten(array[i])
//            }else{
//             temp.push(array[i]);
//            }
//         }
//         return;
//       }
//       innterFlatten(outArray)
//       return temp;
// }

// function flatten(oldArr){
//     var newArr = []
//         for(var i = 0; i < oldArr.length; i++){
//           if(Array.isArray(oldArr[i])){
//                 newArr = newArr.concat(flatten(oldArr[i]))
//           } else {
//                 newArr.push(oldArr[i])
//           }
//     } 
//     return newArr;
//   }

// const array = [ 4, 5, 7, 8, 9 ];

// console.log(array.splice(0));


  
//   const result = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1, 2, 3, 4, 5]
  const result = flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

  console.log('result:', result)