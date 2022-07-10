/*Завдання 1
На лекції ми використовували API jsonplaceholder - 'https://jsonplaceholder.typicode.com/'
Можна перейти за посиланням і ще раз ознайомитись з даним API
Можна створити константу baseUrl = https://jsonplaceholder.typicode.com
const baseUrl = "https://jsonplaceholder.typicode.com";
Будемо використовувати ресурс /users щоб отримати дані користувачів
Завдання: Отримати список користувачів з віддаленого ресурсу /users.
Використати fetch.*/

const baseUrlUsers = 'https://jsonplaceholder.typicode.com/users';

const getAllUsers = (url) => {
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`код помилки ${response.status}`);
        }

    return response.json();
    })
    .then(([data]) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(`Помилка запиту ${err}`);
    })
}

getAllUsers(baseUrlUsers);