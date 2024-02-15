export class TreeNode {
  constructor(value, left, right){
    this.value = value
    this.left = left || null
    this.right = right || null
  }
}

export function findBinaryTreeMaximumDepth(node){
  if(node == null){
    return 0
  }
  let left = findBinaryTreeMaximumDepth(node.left)
  let right = findBinaryTreeMaximumDepth(node.right)
  return Math.max(left, right) + 1
}

export function isBinaryTreeSame(node1, node2){
  if(node1 == null && node2 == null){
    return true
  }
  if(node1.value !== node2.value){
    return false
  }
  return isBinaryTreeSame(node1.left, node2.left) && isBinaryTreeSame(node1.right, node2.right)
}