let permuteText = function(text, l, r) {
    if(l === r){
      console.log(text)
    } else {
      for(let i = l; i <= r; i++) {
          text = swap(text, l, i);
          permuteText(text, l + 1, r);
          text = swap(text, l, i);
      }
    }
  }

let swap = function(text, i, j) {
    let temp;
    let textArray = [...text];
    [textArray[i], textArray[j]] = [textArray[j], textArray[i]]
    return textArray.join("");
}
  
permuteText("abc", 0, 2)