export function flatten(arr) {
  let result = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  })
  return result;
}

export function flattenv2(arr) {
  return arr.reduce((prev, curr) => {
    if(Array.isArray(curr)) {
      return [...prev, ...flattenv2(curr)]
    } else {
      return [...prev, curr]
    }
  }, [])
}

export function flattenv3(arr) {
  if(!Array.isArray(arr)){
    return [arr]
  } else {
    return arr.reduce((prev, curr) => {
      return prev.concat(flattenv3(curr))
    }, [])
  }
}