/**
 * Created by Clovin on 28/02/2018.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let map1 = new Map()
  let map2 = new Map()

  for (let i = 0; i < s.length; i++) {
    if (map1.has(s[i])) {
      if (map1.get(s[i]) !== t[i]) {
        return false
      }
    } else {
      if (map2.has(t[i])) {
        return false
      }

      map1.set(s[i], t[i])
      map2.set(t[i], s[i])
    }
  }

  return true
}
