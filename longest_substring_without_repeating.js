function longestSubstringWithoutRepeating(text) {
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

console.log(longestSubstringWithoutRepeating("abcacbdd"))