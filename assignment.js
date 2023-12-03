function cubeNumber(number) {

    if (typeof number !== 'number') {
        return 'please provide a number'
    }
    const result = number ** 3;
    return result;

}



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



function sortMaker(arr) {
    if (
        !Array.isArray(arr) ||
        arr.length !== 2 ||
        typeof arr[0] !== 'number' ||
        typeof arr[1] !== 'number' ||
        arr[0] < 0 ||
        arr[1] < 0
    ) {
        return 'Invalid Input';
    }

    const [num1, num2] = arr;

    if (num1 === num2) {
        return 'Equal';
    }

    const [min, max] = [Math.min(num1, num2), Math.max(num1, num2)];

    return [max, min];
}



function findAddress(obj) {
    const arrayName = ['street', 'house', 'society']
    for (let i of arrayName) {
        if (!obj.hasOwnProperty(i)) {
            obj[i] = '___'
        }
    }
    return obj.street + ',' + obj.house + ',' + obj.society;
}



function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length == 0) {
        return 'please enter array of array number';
    }
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }
    if (sum >= totalDue) {
        return true;
    }
    else {
        return false;
    }
}