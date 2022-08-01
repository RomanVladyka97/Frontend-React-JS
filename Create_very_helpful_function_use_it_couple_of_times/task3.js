colorLog('Завдання 3', 'info');
/* Дано: код в якому необхідно знайти помилку і виправити її
Результат: вивести в консоль “meow” 
const cat = {
sound: 'meow',
greet: function() {
setTimeout(function() {
    console.log(this.sound)
   }, // write fix in this line of code
0)
}
};
cat.greet(); // should produce "meow"
*/
const cat1 = {
    sound: 'meow',
    greet: function() {
    setTimeout( function() {
        call(console.log(this.sound))
       }, // write fix in this line of code
    0)
    }
    };
cat1.greet(); // should produce "meow"