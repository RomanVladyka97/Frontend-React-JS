colorLog("TASK №2", "info");
function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    let sumArray = 0;
    let a = 0;
        for (let i = 0; i <= initialArray.length; i++) {
            if(typeof 0 === typeof initialArray[i]){
            sumArray += initialArray[i];
            }
        }
    console.log(sumArray);
   }
    
   calculateSumOfArray();