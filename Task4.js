colorLog("TASK №4", "info");
function calculateWordsInString(string) {
   let word = 1;
   for(i = 0; i <= string.length; i++) {
     if (string[i] === ' ' && string[i + 1] !== ' '){ 
        word += 1;
     }
   }
   console.log(word); 
  /*  let a = 0;
    a = string.trim().split(/\s+/).length;
    console.log(a);  */
   }
   calculateWordsInString("Easy string for count");
   calculateWordsInString("Easy");
   calculateWordsInString("Some string with a triple   space");
   calculateWordsInString("Some?  string, with a triple   space");