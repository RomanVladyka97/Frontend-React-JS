/*Завдання 2
У всіх подальних завданнях потрібно буде використовувати fetch та async/await та обробляти можливі помилки запиту.
Будемо використовувати публічне API для доступу до бази данних по всесвіту Зоряних Війн - SWAPI - https://swapi.py4e.com
Потрібно ознайомити з документацією даного API за посиланням - https://swapi.py4e.com/documentation
Кореневе URL для доступу до API - https://swapi.py4e.com/api/ (розділ документації https://swapi.py4e.com/documentation#base )
Список ресурсів які надає API - https://swapi.py4e.com/documentation#root
Потрібно ознайомитись з ресурсами API так як в наступних завданнях потрібно буде їх використовувати


Завдання Зробити запит до https://swapi.py4e.com/api/ і отримати список планет, вивести у консоль.
Результат: вивести у консоль список планет у форматі: [{ name: 'Tatooine', rotation_period: '23', ... }, { name: 'Alderaan', rotation_period: '24', ... }, ... ]*/



const getPlanets = async () => {
    try{
        let response = await fetch("https://swapi.py4e.com/api/planets/");
        let result = await response.json();
        console.log(result.results);
    }catch(error){
        console.log(`Упсс... ${error}`);
    }
}

getPlanets();