const fibonacci = function(number) {
    if (typeof number !== 'number') parseInt(number)
    if (number < 0) return 'OOPS'

    const fibonacciSequence = [0, 1]
    for (let i = 1; i <= number; i++) {
        fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i])
    }
    return fibonacciSequence[number]
};

console.log(fibonacci(20))
// Do not edit below this line
module.exports = fibonacci;
