/**
 * Created by Clovin on 26/01/2018.
 */
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let map = new Map()
  map.set('R', 0)
  map.set('L', 0)
  map.set('U', 0)
  map.set('D', 0)

  for (let i = 0; i < moves.length; i++) {
    map.set(moves[i], map.get(moves[i]) + 1)
  }

  return map.get('L') === map.get('R') && map.get('U') === map.get('D')
}