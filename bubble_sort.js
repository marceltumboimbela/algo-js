let bubbleSort = function(input) {
    const array = [...input];
    for(let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length-i-1; j++) {
        if (array[j] > array[j+1]) {
          [array[j], array[j+1]] = [array[j+1], array[j]];
        }
      }
    }
    return array;
}
console.log(bubbleSort([7,5,6,9,1,3]));