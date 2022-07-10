/*Завдання 5
Написати функцію яка буде використовувати попередньо написану функцію fetchSWAPI, ця функція повинна робити запити щоб отримати дані людини
з вказаним ім'ям, після цього на основі отриманої відповіді паралельно отримати деталі фільмів у яких людина з'явилась.
Функція повинна повертати об'єкт з ім'ям людини та списком з деталями фільмів у форматі: 
{name: ‘’, films: [{title: ‘’, episode_id: ‘’, ...}, ...]} */
const fetchSWAPI = async (resource, throwError) => {
        const rootUrl = "https://swapi.py4e.com/api/";
        let finaleUrl = "";
        if(!resource.includes("https://swapi.py4e.com/api/")) {
            finaleUrl = rootUrl + resource;
        }else{
            finaleUrl = resource;
        }

        const response = await fetch(finaleUrl);
        if (throwError === true && !response.ok){
            throw new Error (`Помилка отримання даних ${response.status}`)
        }
        const result = await response.json();
        return result;
}

const getPersonFilms = async (name) => {
        let getPerson = `https://swapi.py4e.com/api/people/?search=${name}`;
        let response = await fetch(getPerson);
        if (!response.ok){
            throw new Error (`Помилка отримання даних ${response.status}`)
        } 
        let resultResponse = await response.json();
        let filmsList = resultResponse.results[0].films.slice(0);
        let performer = {};
        performer.name = resultResponse.results[0].name;
        performer.films = await Promise.all(filmsList.map((url) => fetchSWAPI(url)));
        return performer;
}
    
const testGetPersonFilms = async () => {
    try {
    const lukeFilms = await getPersonFilms("Luke");
    console.log("lukeFilms ", lukeFilms);
    
    const kenobiFilms = await getPersonFilms("Kenobi");
    console.log("kenobiFilms ", kenobiFilms);
    } catch (error) {
        console.log(" Помилка отримання списку фільмів персонажа ", error);
    }
}

testGetPersonFilms();