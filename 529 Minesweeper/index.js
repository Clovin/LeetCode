/**
 * Created by Clovin on 07/03/2018.
 */
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  let queue = []
  queue.push(click)
  while (queue.length !== 0) {
    let tempBtn = queue.shift()

    if (board[tempBtn[0]][tempBtn[1]] === 'M') {
      board[tempBtn[0]][tempBtn[1]] = 'X'
      continue
    }

    if (board[tempBtn[0]][tempBtn[1]] !== 'E') {
      continue
    }

    let cnt = 0
    // top-left
    if (tempBtn[0] - 1 >= 0 && tempBtn[1] - 1 >= 0 && board[tempBtn[0] - 1][tempBtn[1] - 1] === 'M') {
      cnt++
    }
    // top
    if (tempBtn[0] - 1 >= 0 && board[tempBtn[0] - 1][tempBtn[1]] === 'M') {
      cnt++
    }
    // top-right
    if (tempBtn[0] - 1 >= 0 && tempBtn[1] + 1 < board[tempBtn[0]].length && board[tempBtn[0] - 1][tempBtn[1] + 1] === 'M') {
      cnt++
    }
    // left
    if (tempBtn[1] - 1 >= 0 && board[tempBtn[0]][tempBtn[1] - 1] === 'M') {
      cnt++
    }
    // right
    if (tempBtn[1] + 1 < board[tempBtn[0]].length && board[tempBtn[0]][tempBtn[1] + 1] === 'M') {
      cnt++
    }
    // bottom-left
    if (tempBtn[0] + 1 < board.length && tempBtn[1] - 1 >= 0 && board[tempBtn[0] + 1][tempBtn[1] - 1] === 'M') {
      cnt++
    }
    // bottom
    if (tempBtn[0] + 1 < board.length && board[tempBtn[0] + 1][tempBtn[1]] === 'M') {
      cnt++
    }
    // bottom-right
    if (tempBtn[0] + 1 < board.length && tempBtn[1] + 1 < board[tempBtn[0]].length && board[tempBtn[0] + 1][tempBtn[1] + 1] === 'M') {
      cnt++
    }

    if (cnt !== 0) {
      board[tempBtn[0]][tempBtn[1]] = cnt + ''
      continue
    } else {
      board[tempBtn[0]][tempBtn[1]] = 'B'
    }

    // top-left
    if (tempBtn[0] - 1 >= 0 && tempBtn[1] - 1 >= 0 && board[tempBtn[0] - 1][tempBtn[1] - 1] === 'E') {
      queue.push([tempBtn[0] - 1, tempBtn[1] - 1])
    }
    // top
    if (tempBtn[0] - 1 >= 0 && board[tempBtn[0] - 1][tempBtn[1]] === 'E') {
      queue.push([tempBtn[0] - 1, tempBtn[1]])
    }
    // top-right
    if (tempBtn[0] - 1 >= 0 && tempBtn[1] + 1 < board[tempBtn[0]].length && board[tempBtn[0] - 1][tempBtn[1] + 1] === 'E') {
      queue.push([tempBtn[0] - 1, tempBtn[1] + 1])
    }
    // left
    if (tempBtn[1] - 1 >= 0 && board[tempBtn[0]][tempBtn[1] - 1] === 'E') {
      queue.push([tempBtn[0], tempBtn[1] - 1])
    }
    // right
    if (tempBtn[1] + 1 < board[tempBtn[0]].length && board[tempBtn[0]][tempBtn[1] + 1] === 'E') {
      queue.push([tempBtn[0], tempBtn[1] + 1])
    }
    // bottom-left
    if (tempBtn[0] + 1 < board.length && tempBtn[1] - 1 >= 0 && board[tempBtn[0] + 1][tempBtn[1] - 1] === 'E') {
      queue.push([tempBtn[0] + 1, tempBtn[1] - 1])
    }
    // bottom
    if (tempBtn[0] + 1 < board.length && board[tempBtn[0] + 1][tempBtn[1]] === 'E') {
      queue.push([tempBtn[0] + 1, tempBtn[1]])
    }
    // bottom-right
    if (tempBtn[0] + 1 < board.length && tempBtn[1] + 1 < board[tempBtn[0]].length && board[tempBtn[0] + 1][tempBtn[1] + 1] === 'E') {
      queue.push([tempBtn[0] + 1, tempBtn[1] + 1])
    }
  }

  return board
}
