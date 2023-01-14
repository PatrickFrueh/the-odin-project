const sumAll = function (firstNumber, secondNumber) {
    // Check for negative, order, ...
    if (((firstNumber || secondNumber) < 0) || !Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        return 'ERROR'
    }
    else if (firstNumber > secondNumber) {
        bigNumber = firstNumber;
        smallNumber = secondNumber;
    }
    else if (firstNumber < secondNumber) {
        bigNumber = secondNumber;
        smallNumber = firstNumber;
    };

    // Initialize variables
    let iterations = bigNumber - smallNumber; // 4 - 1 = 3
    let sumAll = 0;

    for (i = smallNumber; i <= (iterations + 1); i++) {
        sumAll += i;
    }

    return sumAll
};

// Do not edit below this line
module.exports = sumAll;
