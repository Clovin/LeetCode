/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    target = Math.abs(target);
    let d;
    let k;
    let i = 1;
    let now = 0;
    while(1) {
        if (now + i >= target) {
            d = now + i - target;
            k = i;
            break;
        }

        now += i++;
    }

    if (d % 2 == 0) {
        return k;
    }
    return k + 1 + (k % 2);
};