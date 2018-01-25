/**
 * Created by Clovin on 25/01/2018.
 */

let storage = new Map()

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  let uniqueKey = Date.now().toString(36)
  storage.set(uniqueKey, longUrl)
  return "http://tinyurl.com/" + uniqueKey
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return storage.get(shortUrl.split("com/")[1])
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */