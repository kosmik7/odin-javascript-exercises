const palindromes = function (string) {
    const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '')
    const reversedString = cleanString.split('').reverse().join('')
    return reversedString === cleanString
};

// Do not edit below this line
module.exports = palindromes;
