/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let tempS = S.split('');
    let [left, right] = [0, tempS.length - 1];
    while(left < right) {
        if (!isLetter(tempS[left])) {
            left++;
            continue;
        }

        if (!isLetter(tempS[right])) {
            right--;
            continue;
        }

        let temp = tempS[left];
        tempS[left] = tempS[right];
        tempS[right] = temp;

        left++;
        right--;
    }

    return tempS.join('');
};

function isLetter (c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}
