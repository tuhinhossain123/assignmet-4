function findAddress(obj) {
    const arrayName = ['street', 'house', 'society']
    for (let i of arrayName) {
        if (!obj.hasOwnProperty(i)) {
            obj[i] = '___'
        }
    }
    return obj.street + ',' + obj.house + ',' + obj.society;
}

const address = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
console.log(findAddress(address));

