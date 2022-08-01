colorLog("TASK №1", "info");
function printPowsOf2(number) {
    let extent = '';
    let result = '';
    if ( typeof 0 !== typeof number) {
        result = number + ' - is incorrect type!';
    } else {
        for (let i = 0; extent * 2 < number; i++) {
            extent = 2 ** i;
            result += (extent * 2 < number) ?  extent + ', ' :  extent;
        }
    }           
    console.log(result);
}
   printPowsOf2("302");
   printPowsOf2(null);
   printPowsOf2(128);
   printPowsOf2(60);