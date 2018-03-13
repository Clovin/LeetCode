/**
 * Created by Clovin on 13/03/2018.
 */
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let cnt = 0
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X' && (i - 1 < 0 || board[i - 1][j] === '.') && (j - 1 < 0 || board[i][j - 1] === '.')) {
        cnt++
      }
    }
  }
  return cnt
}
