colorLog("TASK №2", "info");
function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    let sumArray = 0;
    for (let i; i <= initialArray.length; i++) {
        sumArray += initialArray[i];
    }
    console.log(sumArray);
   }
    
   calculateSumOfArray();