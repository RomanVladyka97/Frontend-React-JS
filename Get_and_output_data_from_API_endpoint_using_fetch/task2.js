/*Завдання 2
Крім ресурсу /users API надає ще інші ресурси, наприклад /albums щоб отримати дані фотоальбомів
І ці ресурси можуть залежати один від одного, наприклад ми можемо отримати альбоми які належать певному користувачу за допомогою 
ендпоінту /users/1/albums - отримаємо альбоми користувача у якого поле id = 1
Завдання. Отримати список усіх альбомів які належать користувачу з id - 10.
Використати fetch.
Після отримання відповіді від API, перевірити чи запит виконався успішно (чи знаходиться код відповіді в діапазоні 200-299)
Вивести у консоль результат

fetch(`${baseUrl}/...`);*/


const userAlbumsUrl = (userId) => `https://jsonplaceholder.typicode.com/users/${userId}/albums`;

const getUserAlbums = (url) => {
    fetch(url)
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

let result = getUserAlbums(userAlbumsUrl(10));
console.log(result);
