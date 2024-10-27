const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    
    return array.reduce((oldest, person) => {
        const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        console.log(oldest)
        return personAge > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
