const removeFromArray = function(array, ...args) {
    const set = new Set(args)
    return result = array.filter((item) => !set.has(item));
};

// Do not edit below this line
module.exports = removeFromArray;
