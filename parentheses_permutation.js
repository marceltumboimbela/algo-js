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
  function backtrack(combination, openCount, closeCount){
    if(combination.length === 2*n){
      result.push(combination)
      return
    }
    if(openCount < n){
      combination = combination + '('
      backtrack(combination, openCount + 1, closeCount)
      combination = combination.slice(0, combination.length - 1)
    }
    if(closeCount < openCount){
      combination = combination + ')'
      backtrack(combination, openCount, closeCount + 1)
      combination = combination.slice(0, combination.length - 1)
    }
  }
  backtrack("", 0, 0)
  return result
}