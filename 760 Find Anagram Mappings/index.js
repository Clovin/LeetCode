/**
 * Created by Clovin on 25/01/2018.
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
let anagramMappings = function (A, B) {
  return A.map(item => B.indexOf(item))
}