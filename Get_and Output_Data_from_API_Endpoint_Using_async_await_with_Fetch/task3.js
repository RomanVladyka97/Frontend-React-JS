/*Завдання 3
Зробити запит до SWAPI щоб отримати список людей з прізвищем Skywalker, вивести у консоль.
Документація по пошуку - https://swapi.py4e.com/documentation#search
Результат: вивести у консоль список людей з прізвищем Skywalker у форматі: [{ name: 'Luke Skywalker', 
height: 172, ... }, { name: 'Anakin Skywalker', height: 188, ... }, ...]*/

const getSkywalkers = async (name) => {
    try {
        let response = await fetch(`https://swapi.py4e.com/api/people/?search=${name}`);
        let result = await response.json();
        if(result.results.length === 0){
            result = (`'${name}' - не знайдено`)
            console.log(result);
        }else{
            console.log(result.results);
        }
    } catch(error) {
        console.log(`Упсс щось пішло не так... ${error}`);
    }
}

getSkywalkers('Skywalker');