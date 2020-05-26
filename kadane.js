// Can be used to return largest sum of subarray

function kadane(arr) {
  let maxEndingHere = 0;
  let maxEndingSoFar = 0;
  
  for(let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    maxEndingHere = maxEndingHere + cur;
    if(maxEndingHere < 0) {
      maxEndingHere = 0;
    }
    maxEndingSoFar = Math.max(maxEndingHere, maxEndingSoFar);
  }
  return maxEndingSoFar
}

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(kadane(arr));
