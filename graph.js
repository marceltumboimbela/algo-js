export function bfs(graph, start){
  const queue = [start]
  const visited = new Set()
  const result = []

  while(queue.length > 0){
    const vertex = queue.shift()
    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of graph[vertex]) {
        queue.push(neighbor);
      }
    }
  }

  return result
}

export function dfs(graph, start){
  const stack = [start]
  const visited = new Set()
  const result = []

  while(stack.length > 0){
    const vertex = stack.pop()
    if(!visited.has(vertex)){
      visited.add(vertex)
      result.push(vertex)

      for(const neighbor of graph[vertex]){
        stack.push(neighbor)
      }
    }
  }

  return result
}

export function bfsTree(node){
  const result = []
  const queue = [node]
  while(queue.length > 0){
    const currentNode = queue.shift()
    result.push(currentNode.value)

    if(currentNode.left != null) {
      queue.push(currentNode.left)
    }

    if(currentNode.right != null) {
      queue.push(currentNode.right)
    }
  }
  return result
}

export function dfsTree(node){
  const result = []
  const stack = [node]
  while(stack.length > 0){
    const currentNode = stack.pop()
    result.push(currentNode.value)

    if(currentNode.left != null) {
      stack.push(currentNode.left)
    }

    if(currentNode.right != null) {
      stack.push(currentNode.right)
    }
  }
  return result
}

export function dfsTreePostorder(node){
  const result = []
  function helper(node){
    if(node == null){
      return
    }

    helper(node.left)
    helper(node.right)
    result.push(node.value)
  }
  helper(node)
  return result
}

export function dfsTreeInorder(node){
  const result = []
  function helper(node){
    if(node == null){
      return
    }

    helper(node.left)
    result.push(node.value)
    helper(node.right)
  }
  helper(node)
  return result
}