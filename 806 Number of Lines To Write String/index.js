/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    let line = 1;
    let lastLine = 0;

    for (let i = 0; i < S.length; i++) {
        if (lastLine + widths[S[i].charCodeAt() - 'a'.charCodeAt()] > 100) {
            lastLine = widths[S[i].charCodeAt() - 'a'.charCodeAt()];
            line++;
            continue;
        }

        lastLine += widths[S[i].charCodeAt() - 'a'.charCodeAt()];
    }

    return [line, lastLine];
};
