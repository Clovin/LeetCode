/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let [i, j] = [0, 0];
    while(i < name.length || j < typed.length) {
        if (name[i] === typed[j]) {
            i++;
            j++;
            continue;
        }

        if (name[i - 1] === typed[j]) {
            j++;
            continue;
        }

        return false;
    }

    return true;
};