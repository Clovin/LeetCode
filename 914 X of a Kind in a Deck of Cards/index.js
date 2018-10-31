/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let map = new Map();

    deck.forEach(item => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    })

    let result = null;
    for (let [key, value] of map) {
        if (result === null) {
            result = value;
            continue;
        }

        result = gcd(result, value);
        if (result === 1) {
            return false;
        }
    }

    return result !== 1;
};

function gcd(m, n) {
	if (m < n) {
		let tmp = m;
		m = n;
		n = tmp;
	}
	if (n === 0)
		return m;
	else
		return gcd(n, m % n);
}
