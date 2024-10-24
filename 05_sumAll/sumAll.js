const sumAll = function(number1, number2) {
    if (!Number.isInteger(number1) || !Number.isInteger(number2)) return 'ERROR';
    if (number1 < 0 || number2 < 0) return 'ERROR';

    const array = [number1, number2].sort((a, b) => a - b)
    sortedNumber1 = array[0]
    sortedNumber2 = array[1]
    let sum = 0
    
    for (sortedNumber1; sortedNumber1 <= sortedNumber2; sortedNumber1++) {
        sum += sortedNumber1
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
