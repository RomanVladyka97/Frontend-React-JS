colorLog('Задача 2', 'info');
function isEvenArray(initialArray) {
   return initialArray.every(element => element % 2 == 0) ? "YES" : "NO";
}
let some_arr = [2,4,6,8];
console.log(isEvenArray(some_arr));