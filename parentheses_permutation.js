export function brackets(left, right, text, result){
  if(left > 0){
    let texts = text + "(";
    brackets(left - 1, right + 1, texts, result);
  }
  if(right > 0){
    let texts = text + ")";
    brackets(left, right - 1, texts, result);
  }
  if(left === 0 && right === 0){
    result.push(text)
  }
}

export function generateParentheses(n) {
  let result = []
  function bracket(combination, openCount, closeCount){
    if(combination.length === 2*n){
      result.push(combination)
    }
    if(openCount < n){
      bracket(combination + '(', openCount + 1, closeCount)
    }
    if(closeCount < openCount){
      bracket(combination + ')', openCount, closeCount + 1)
    }
  }
  bracket("", 0, 0)
  return result
}