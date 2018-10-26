/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let transformations = new Set();

    words.forEach(word => {
        let transformation = '';
        for (let i = 0; i < word.length; i++) {
            transformation += morse[word[i].charCodeAt() - 'a'.charCodeAt()];
        }
        transformations.add(transformation);
    })

    return transformations.size;
};
