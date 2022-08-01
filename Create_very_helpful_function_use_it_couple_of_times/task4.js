colorLog('Завдання 4', 'info');
/* Дано: об'єкт у якому необхідно переписати існуючу функція на стрілочну, щоб він почав виконуватись коректно
Результат: вивести у консоль “bark”*/
/*const dog = {
 sound: 'bark',
 greet: function() {
     setTimeout(function () { // fix code in this line
         console.log(this.sound)
     },0)
   }
} */
const dog1 = {
    sound: 'bark',
    greet: function() {
        setTimeout( someSound = () => console.log(this.sound));
    }
};
    
dog1.greet();