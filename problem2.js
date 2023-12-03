function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'please provide a string';
    }
    else {
        if (string1.includes(string2) || string2.includes(string1)) {
            return true;
        }
        else {
            return false;
        }

    }

}
console.log(matchFinder('John Doe','ohn'))
console.log(matchFinder('javascript','code'))
console.log(matchFinder('peter parker','pen'))
console.log(matchFinder('Peter parker',true))