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
const result = canPay([1,3,5], 10);
console.log(result)
