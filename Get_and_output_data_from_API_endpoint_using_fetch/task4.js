/*Завдання 4
Отримати список вказаних альбомів, вказуючи їхні id.
Для цього потрібно використати ресурс /albums.
Щоб отримати альбом з id - 5, можна використати ендпоінт /albums/5
Але дане API не надає можливості вказати декілька id альбомів щоб отримати ці альбоми в одному запиті
Тому потрібно робити декілька запитів якщо хочемо отримати декілька альбомів
Написати функцію getAlbum(id), яка буде приймати id альбому який потрібно отримати.
функція getAlbum повинна повертати проміс, який у разі успішного виконання повертає дані альбому
Написати функцію getSpecifiedAlbums(ids = []), яка буде приймати масив ids з значеннями id для альбомів які потрібно отримати 
функція getSpecifiedAlbums() повинна повертати проміс, який у разі успішного виконання повертає масив вказаних альбомів
Щоб getSpecifiedAlbums виконувалась швидше, усі запити на отримання певного альбому повинні виконуватись паралельно
У разі успішного виконання промісу з getSpecifiedAlbums, вивести у консоль результат. */

const AlbumsUrl = (id) => `https://jsonplaceholder.typicode.com/albums/${id}`;

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

const getSpecifiedAlbums = (ids = []) => {
    let arrAlbums = ids.forEach((element) => {new Promise((resolve, reject) => {
        resolve(getUserAlbums(AlbumsUrl(element)));
    })});
    return  Promise.all([arrAlbums]);
}

let result = getSpecifiedAlbums([1,15, 9, 7, 4,11,12,3,44]);
console.log(result);