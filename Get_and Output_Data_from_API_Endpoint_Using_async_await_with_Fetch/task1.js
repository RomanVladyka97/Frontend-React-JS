/*Завдання 1
Переписати функцію з Promise на async/await з використанням fetch.

function fetchAlbums() {
 fetch('https://jsonplaceholder.typicode.com/users/1/albums')
 .then((response) => {
   if (!response.ok) {
     throw new Error(`Failed with status code: ${response.status}`);
   }
 
   return response.json();
 })
 .then((data) => {
   console.log("Result: ", data);
 })
 .catch((error) => {
   console.log("Request Error: ", error);
 });
}
 
fetchAlbums();*/
const fetchAlbums = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/1/albums');
        let data = await response.json();
        console.log(data);
    } catch(error) {
        console.log("Request Error: ", error);
    }
}
    
fetchAlbums();
