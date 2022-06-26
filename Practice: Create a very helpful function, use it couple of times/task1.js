colorLog('Практична 3', 'warning');
colorLog('Завдання 1', 'info');
/* 1. Global Scope: створити змінну в глобальній області видимості, створити функцію і в тілі функції вивести цю змінну в консоль
   2. Function Scope: створити функцію, оголосити зміну всередині функції, тоді спробувати вивести цю змінну в консоль всередині функції, 
та за межами функції
   3. Block Scope: Створити функцію, в функції написати блок {} всередині якого оголосити змінну та вивести її в консоль, тоді вивести в 
консоль цю змінну за межами блоку, та подивитись на результат */
let cat = 'Margery';

function globalScope(){
    console.log(`Cat name is ${cat}`);
}

globalScope();

function funcScope(){
    let dog = 'Dick';
    console.log(`dog name is ${dog}`);
}

funcScope();
//console.log(`Dog name is ${dog}`);//error -  змінна 'Dog' відсутня в глобальній лексичній області видимості - вона в тілі функції 'funcScope'

function blockScope() {
    {
        let bird = 'parrot';
        console.log(`this bird is ${bird}`);
    }
    //console.log(`this bird is ${bird}`); // error - змінна 'bird' відсутня в лексичній області видимості функції - вона в тілі об'єкта
}

blockScope();
