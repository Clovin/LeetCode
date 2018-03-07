/**
 * Created by Clovin on 07/03/2018.
 */
/**
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
  this.set = new Set()
}

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dict) {
  for (let i = 0; i < dict.length; i++) {
    this.set.add(dict[i])
  }
}

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (word) {
  for (let [key] of this.set.entries()) {
    if (key.length === word.length) {
      let cnt = 0
      for (let i = 0; i < key.length; i++) {
        if (key[i] !== word[i]) {
          cnt++
          if (cnt > 1) {
            break
          }
        }
      }

      if (cnt === 1) {
        return true
      }
    }
  }

  return false
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */
