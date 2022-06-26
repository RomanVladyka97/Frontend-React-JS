colorLog('Практична 4', 'warning');
colorLog('Завдання 1', 'info');

const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"]; // data

let compose = ([...funcs]) => (data) => funcs.reduceRight((acc, cur) => cur(acc), data); //  compose function

let modifyArray = sortArrFunc => data => data.filter((element) => sortArrFunc(element)); //  modify array function
let modifyCondition = element => element.length < 4;

let allWordsToLowCase = data => data.join(' - ').toLowerCase(); // modify words
let allFirstLetterToUperCase = data => data
    .map((element) => element[0].toUpperCase() + element.slice(1).toLowerCase())
    .join('-');

let allToLower = compose([allWordsToLowCase, modifyArray(modifyCondition)]); //  compose + modifyArray 
let capitalizeAllFirst = compose([allFirstLetterToUperCase, modifyArray(modifyCondition)]); // compose + modifyArray

console.log(`Result: ${allToLower(arr)} length: ${allToLower(arr).length}`); // result
console.log(`Result: ${capitalizeAllFirst(arr)} length: ${capitalizeAllFirst(arr).length}`);