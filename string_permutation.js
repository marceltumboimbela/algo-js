export function permuteText(text, l, r, result) {
    if(l === r){
      result.push(text)
    } else {
      for(let i = l; i <= r; i++) {
          text = swap(text, l, i);
          permuteText(text, l + 1, r, result);
          text = swap(text, l, i);
      }
    }
  }

function swap(text, i, j) {
    let textArray = [...text];
    [textArray[i], textArray[j]] = [textArray[j], textArray[i]]
    return textArray.join("");
}
  