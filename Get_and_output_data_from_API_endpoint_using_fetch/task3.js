/*Завдання 3
Завдання. Створити нового користувача - зробити POST запит на ендпоінт 'https://jsonplaceholder.typicode.com/users'.
Використати fetch.
Для нового користувача вказати поля name, username, email.
Оскільки дане API працює з JSON то body запиту повинне бути у JSON форматі.
Вказати для запиту заголовок 'Content-type' з значенням 'application/json'
Після отримання відповіді від API, перевірити чи запит виконався успішно
Вивести у консоль результат*/

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const newUser = {
    name: 'Roma',
    username: 'Alviona',
    email: 'romanromanuch@gmail.com'
};

const postNewUser = (usersUrl, user) => {
    fetch(usersUrl, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-type':'application/json'
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`код помилки ${response.status}`);
        }

        return response.json();
    })
    .then((json) => {
        console.log(json);
    })
    .catch((err) => {
        console.log(`Помилка запиту ${err}`);
    })
}

postNewUser(usersUrl, newUser);