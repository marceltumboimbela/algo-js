import { longestSubstringWithoutRepeating, longestSubstringWithoutRepeatingv2, longestSubstringWithAtMostTwoDistinctCharacters } from "../substring";
import { brackets, generateParentheses } from "../parentheses_permutation";
import { permuteText } from "../string_permutation";
import { TreeNode, findBinaryTreeMaximumDepth, isBinaryTreeSame } from "../tree";
import { bfs, dfs, bfsTree, dfsTree } from "../graph";
import { flatten, flattenv2, flattenv3 } from "../flatten_array";

test.only('', () => {
  // console.log(longestSubstringWithoutRepeating("abcacbdd"))

  const result = []
  brackets(3, 0, "", result)
  console.log(result)

  console.log(generateParentheses(3))
})

test('', () => {
  const result = []
  permuteText("abc", 0, 2, result)
  console.log(result)
})

test('', () => {
  longestSubstringWithoutRepeatingv2("abcacbdd")
})

test('', () => {
  longestSubstringWithAtMostTwoDistinctCharacters("ninninja")
})

test('', () => {
  const node1 = new TreeNode(9)
  const node2 = new TreeNode(20)
  const node3 = new TreeNode(15)
  const node4 = new TreeNode(7)
  node2.left = node3
  node2.right = node4
  const root = new TreeNode(3, node1, node2)

  console.log(findBinaryTreeMaximumDepth(root))
})

test('', () => {
  const node1 = new TreeNode(9)
  const node2 = new TreeNode(20)
  const node3 = new TreeNode(15)
  const node4 = new TreeNode(7)
  node2.left = node3
  node2.right = node4
  const root1 = new TreeNode(3, node1, node2)
  const root2 = new TreeNode(3, node1, node2)

  console.log(isBinaryTreeSame(root1, root2))
})

test('', () => {
  const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
  };

  console.log(bfs(graph, 'A'))
  console.log(dfs(graph, 'A'))
})

test('', () => {
  const node3 = new TreeNode(4)
  const node4 = new TreeNode(5)
  const node5 = new TreeNode(6)
  const node6 = new TreeNode(7)
  const node1 = new TreeNode(2, node3, node4)
  const node2 = new TreeNode(3, node5, node6)
  const root = new TreeNode(1, node1, node2)

  console.log(bfsTree(root))
  console.log(dfsTree(root))
})

test('flatten', () => {
  const arr = [1, [2, 3, [4, 5, 6]]]

  console.log(flatten(arr))
  console.log(flattenv2(arr))
  console.log(flattenv3(arr))
})