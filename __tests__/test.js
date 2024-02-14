import { longestSubstringWithoutRepeating, longestSubstringWithoutRepeatingv2, longestSubstringWithAtMostTwoDistinctCharacters } from "../substring";
import { brackets } from "../parentheses_permutation";
import { permuteText } from "../string_permutation";

test('', () => {
  console.log(longestSubstringWithoutRepeating("abcacbdd"))

  const result = []
  brackets(3, 0, "", result)
  console.log(result)
})

test('', () => {
  const result = []
  permuteText("abc", 0, 2, result)
  console.log(result)
})

test('', () => {
  longestSubstringWithoutRepeatingv2("abcacbdd")
})

test.only('', () => {
  longestSubstringWithAtMostTwoDistinctCharacters("ninninja")
})