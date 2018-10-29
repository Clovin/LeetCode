/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set = new Set();

    emails.forEach(email => {
        let local = email.split('@')[0];
        let domain = email.split('@')[1];

        local = local.replace(/\./g, '');
        local = local.slice(0, local.indexOf('+'));

        set.add(local + '@' + domain);
    })

    return set.size;
};
