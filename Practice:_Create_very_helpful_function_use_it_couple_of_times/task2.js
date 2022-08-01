colorLog('Завдання 2', 'info');
/* В функції showCarInfo вивести в консоль name та model об'єкту car використовуючи контекст через this, 
викликати функцію showCarInfo використовуючи bind. */

const car = {
    name : "Tesla",
    model : "X",
};
    
function showCarInfo() {
    console.log(`car name is  ${this.name}`);
    console.log(`car model is  ${this.model}`);
}
let whatCar = showCarInfo.bind(car);
whatCar();