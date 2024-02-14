export function longestSubstringWithoutRepeating(text) {
  // sliding window is left to right, or in this case is the substring
  let result = 0
  let left = 0
  // we will store character as key and last seen index as value in object seen
  const seen = {}

  for(let right = 0; right < text.length; right++) {
    const current = text[right]

    // seen[current] >= left to ensure the seen character is between the window
    // if it has been seen but outside of the window, we can just ignore it
    if(Object.hasOwn(seen, current) && seen[current] >= left) {
      left = seen[current] + 1
    } else {
      result = Math.max(result, right - left + 1)
    }
    seen[current] = right
  }

  return result
}

export function longestSubstringWithoutRepeatingv2(text){
  // hash will store the char as key and occurence as value in a sliding window
  // the idea of sliding window is find an invalid window, try make it valid and calculate the desired value
  // if duplicate character is found, counter will be + 1 (window is invalid)
  // move left, try to decrease counter if the hash value is more than 1 (because it is invalid) until window is valid
  
  let result = 0
  let left = 0
  let right = 0
  let counter = 0 // check if sliding window is valid, value will be + 1 if it is not valid
  const map = {}

  while(right < text.length){
    const current = text[right]
    if(Object.hasOwn(map, current)){
      map[current] += 1
    } else {
      map[current] = 1
    }

    if(map[current] > 1){
      counter += 1
    }
    
    right += 1
    while(counter > 0){
      const temp = text[left]
      // console.log(map, left, right, text.slice(left, right))
      if(map[temp] > 1){
        // console.log(map, temp, current)
        counter -= 1
      }
      map[temp] -= 1
      left += 1
    }
    result = Math.max(result, right - left)
  }
  console.log(result)
}

export function longestSubstringWithAtMostTwoDistinctCharacters(text) {
  let counter = 0 // if counter > 2, it means there are at least 3 different characters in the sliding window
  let left = 0
  let right = 0
  let result = 0
  const map = {}
  while(right < text.length){
    const current = text[right]
    if(Object.hasOwn(map, current)){
      map[current] += 1
    } else {
      map[current] = 1
    }

    if(map[current] === 1){
      counter += 1
    }
    
    right += 1
    while(counter > 2){
      // console.log(text.slice(left, right))
      const temp = text[left]
      map[temp] -= 1
      if(map[temp] === 0){
        counter -= 1
      }
      left += 1
    }
    result = Math.max(result, right - left)
  }
  console.log(result)
}
