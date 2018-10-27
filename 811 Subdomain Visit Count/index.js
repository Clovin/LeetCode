/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let map = new Map();
    
    for (let i = 0; i < cpdomains.length; i++) {
        let time = parseInt(cpdomains[i].split(' ')[0]);
        let domains = cpdomains[i].split(' ')[1].split('.');

        let domain = [];
        for (let j = domains.length - 1; j >= 0; j--) {
            domain.unshift(domains[j]);
            if (map.has(domain.join('.'))) {
                map.set(domain.join('.'), map.get(domain.join('.')) + time);
            } else {
                map.set(domain.join('.'), time);
            }
        }
    }

    let result = []
    for (let [key, value] of map) {
        result.push(`${value} ${key}`);
    }

    return result;
};
