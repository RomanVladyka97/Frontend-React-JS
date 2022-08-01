
/*function unicFn(initialArray) {
  let unique = unique.filter((element, index, array) => array.indexOf(value) === index); 
  return console.log(unique);
}*/
colorLog('Практична 2', 'warning');
colorLog('Задача 1', 'info');
function unicFn(initialArray) {
  let unique = initialArray.filter((Element, index, array) => array.indexOf(Element) === index);
  return unique;
}

let arr = [2, 3, 1, 3, 3, 7];
console.log(unicFn(arr)); 