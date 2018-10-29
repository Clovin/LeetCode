/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    let temp = '';
    let num = N;
    while(1) {
        if (num === 0) {
            break;
        }

        temp += num % 2;
        num = Math.floor(num / 2);
    }

    let result = 0;
    let flag = false;
    let cnt = 0;
    for (let i = 0; i < temp.length; i++) {
        if (flag) {
            cnt++;

            if (temp[i] === '1') {
                result = cnt > result ? cnt : result;
                cnt = 0;
            }
        } else if (temp[i] === '1') {
            flag = true;
        }
    }

    return result;
};

