/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let max = 0;
    let start = null;
    let end = 0;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 0) {
            end++;
            continue;
        }

        if (start === null) {
            max = end;
            start = i;
            end++;
            continue;
        }

        max = max > Math.floor((end - start) / 2) ? max : Math.floor((end - start) / 2);
        start = i;
        end++;
    }

    if (end - start - 1 > max) {
        return end - start - 1;
    }

    return max;
};
