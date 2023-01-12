const repeatString = function (string, num) {
    // Check for a negative number
    if (num < 0) {
        return 'ERROR'
    }

    // Repeat the input string a *num* amount of times
    let repeatedString = ''
    for (i = 0; i < num; i++) {
        repeatedString += string
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
