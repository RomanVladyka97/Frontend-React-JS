colorLog('Задача3', 'info');
function filterArray(initialArray) {
    let arr_onlyString = initialArray.filter(element => typeof element == 'string');
    return arr_onlyString;
}
let arr1 = [1, 'Roma', 3, 'Test', 11];
console.log (filterArray(arr1));