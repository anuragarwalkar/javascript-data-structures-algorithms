/* if 0 is present in arr[] then returns the index of FIRST occurrence 
       of 0 in arr[low..high], otherwise returns -1 */
       function firstZero(arr, low, high)  
       { 
           if (high >= low)  
           { 
               // Check if mid element is first 0 
               let mid = Math.floor(low + (high - low) / 2); 
               if ((mid == 0 || arr[mid - 1] == 1) && arr[mid] == 0) 
                   return mid; 
     
               if (arr[mid] == 1) // If mid element is not 0 
                   return firstZero(arr, (mid + 1), high); 
               else // If mid element is 0, but not first 0 
                   return firstZero(arr, low, (mid - 1)); 
           } 
           return -1; 
       } 
     
       // A wrapper over recursive function firstZero() 
       function countZeroes(arr)  
       { 
           const n = arr.length;
           // Find index of first zero in given array 
           let first = firstZero(arr, 0, n - 1); 
     
           // If 0 is not present at all, return 0 
           if (first == -1) 
               return 0; 
     
           return (n - first); 
       } 


const result = countZeroes([1, 1, 1, 1, 1, 0, 0, 0])    

console.log('result:', result)