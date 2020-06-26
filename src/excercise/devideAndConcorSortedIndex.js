const firstOcc = (arr,  low,  high,  x) =>
{
  if(high >= low)
  {
    let mid = Math.floor((low + high)/2);
    if( ( mid == 0 || x > arr[mid-1]) && arr[mid] == x)
      return mid;
    else if(x > arr[mid])
      return firstOcc(arr, (mid + 1), high, x);
    else
      return firstOcc(arr, low, (mid -1), x);
  }
  return -1;
}

const lastOcc = ( arr,  n,  low,  high,  x) =>
{
  if(high >= low)
  {
    let mid = Math.floor((low + high)/2);
    if( ( mid == n-1 || x < arr[mid+1]) && arr[mid] == x )
      return mid;
    else if(x < arr[mid])
      return lastOcc(arr, n, low, (mid -1), x);
    else
      return lastOcc(arr, n, (mid + 1), high, x);
  }
  return -1;
}

const sortedFrequency = (arr,  x) =>
{
  const n = arr.length;
  let idxFirst = firstOcc(arr, 0, n-1, x);
  // NUMBER DOES NOT EXIST
  if(idxFirst == -1){ return -1; }
  let idxLast = lastOcc(arr, n, idxFirst, n-1, x);
  return idxLast - idxFirst + 1;
}

const result = sortedFrequency([1,1,2,2,2,2,3], 2);

console.log('result:', result)