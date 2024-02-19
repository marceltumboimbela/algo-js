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

export function permuteTextv2(text){
  let result = []

  function swapChar(text, from, to){
    const charArray = [...text];
    [charArray[from], charArray[to]] = [charArray[to], charArray[from]]
    return charArray.join("");
  }

  function backtrack(text, start){
    if(start === text.length - 1){
      result.push(text.slice())
      return
    }
    for(let i = start; i < text.length; i++){
      text = swapChar(text, start, i)
      backtrack(text, start + 1)
      text = swapChar(text, start, i)
    }
  }

  backtrack(text, 0)
  return result
}

export function permuteNumberArray(arr){
  let result = []

  function backtrack(tempList, arr){
    if(tempList.length === arr.length){
      result.push(tempList.slice())
      return
    }
    for(let i = 0; i < arr.length; i++){
      if(tempList.includes(arr[i])){
        continue
      }
      tempList.push(arr[i])
      backtrack(tempList, arr)
      tempList.pop()
    }
  }

  backtrack([], arr)
  return result
}

export function permuteNumberArrayv2(arr){

  let result = []

  function swapItem(arr, from, to){
    const res = [...arr]
    const temp = res[from]
    res[from] = res[to]
    res[to] = temp
    return res
  }

  function backtrack(arr, start){
    if(start === arr.length - 1){
      result.push(arr.slice())
      return
    }
    for(let i = start; i < arr.length; i++){
      arr = swapItem(arr, start, i)
      backtrack(arr, start + 1)
      arr = swapItem(arr, start, i)
    }
  }

  backtrack(arr, 0)
  return result
}