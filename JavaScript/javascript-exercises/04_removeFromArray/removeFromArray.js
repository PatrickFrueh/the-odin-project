const removeFromArray = function (arr, ...args) {
    for (j = 0; j < args.length; j++) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === args[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr
};

removeFromArray([1, 2, 3, 4], 3, 2)

// Do not edit below this line
module.exports = removeFromArray;
