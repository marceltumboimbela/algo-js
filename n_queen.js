function isSafeToPlace(board, row, column){
  for(let i = 0; i < row; i++){
    // check if another queen is in same column
    if(board[i] === column) {
      console.log('same column', board, row, column)
      return false
    }

    // check if another queen is in same diagonal (left to right)
    if(board[i] - i === column - row){
      console.log('same diagonal left', board, row, column)
      return false
    }

    // check if another queen is in same diagonal (right to left)
    if(board[i] + i === column + row){
      console.log('same diagonal right', board, row, column)
      return false
    }
  }
  return true
}

export function nQueen(n){
  let result = []

  function backtrack(board, row){
    console.log(board, row, n)
    if(row === n){
      result.push([...board])
      return
    }
    for(let column = 0; column < n; column++){
      if(isSafeToPlace(board, row, column)){
        board[row] = column
        backtrack(board, row + 1)
      }
    }
  }
  // initial board is represented as [0, 0, 0, 0]
  // each room represented the column position of the queen, e.g. [2, 0, 0, 0] means in row 0 and column 2, a queen is positioned

  backtrack(Array(n).fill(0), 0)
  return result
}