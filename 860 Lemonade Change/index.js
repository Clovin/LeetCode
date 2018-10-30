/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let [five, ten, twenty] = [0, 0, 0];

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++;
            continue;
        }

        if (bills[i] === 10) {
            if (five === 0) {
                return false;
            }

            five--;
            ten++;
        }

        if (bills[i] === 20) {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
                continue;
            }

            if (five > 2) {
                five -= 3;
                continue;
            }

            return false;
        }
    }

    return true;
};

