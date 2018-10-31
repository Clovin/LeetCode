/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '#') {
            if (i - 1 >= 0) {
                S = S.slice(0, i - 1) + S.slice(i + 1);
                i -= 2;
                continue;
            }

            S = S.slice(0, i) + S.slice(i + 1);
            i -= 1;
        }
    }

    for (let i = 0; i < T.length; i++) {
        if (T[i] === '#') {
            if (i - 1 >= 0) {
                T = T.slice(0, i - 1) + T.slice(i + 1);
                i -= 2;
                continue;
            }

            T = T.slice(0, i) + T.slice(i + 1);
            i -= 1;
        }
    }

    return S === T;
};