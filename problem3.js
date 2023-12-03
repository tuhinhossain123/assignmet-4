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

console.log(
    sortMaker([2, 3]),
    sortMaker([4, 2]),
    sortMaker([4, 4]),
    sortMaker([1, 2]),
    sortMaker([4, -2])
);

