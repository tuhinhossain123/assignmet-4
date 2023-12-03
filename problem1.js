function cubeNumber(number) {

    if (typeof number !== 'number') {
        return 'This is a invalid number'
    }
    const result = number ** 3;
    return result;

}



const findCube =10;
const total = cubeNumber(findCube);
console.log(total);