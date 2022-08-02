// клас для фетчу фільмів
class Api {
    constructor(){
        if(typeof Api.instance === 'object'){
            return Api.instance;
        }
        this.popUrl = "https://api.themoviedb.org/3/movie/popular?";
        this.serchUrl = "https://api.themoviedb.org/3/search/movie?";
        this.apiKey = "api_key=c1f1bfcf10259d5f3d7bd66da82c97f0&";
        this.language = "language=uk&";
        this.page = `page=1`;
        this.inputText = undefined;
        Api.instance = this;
        return this;
    }
    async fetchPopularMovies(inputText, page) {
        this.inputText = inputText;
        this.page = `page=${page}`;
        let uri = `query=${encodeURI(this.inputText)}`;
        let response;
        if(this.inputText === undefined){
            response = await fetch(`${this.popUrl}${this.apiKey}${this.language}${this.page}`);
        }else{
            response = await fetch(`${this.serchUrl}${this.apiKey}${this.language}${this.page}&${uri}`);
        }
        const promMoviesList = await  response.json();
        return promMoviesList;
    }
}

let userSerchInput = undefined;
let curentPage = 1;

let form = document.querySelector('#serch-form');
let input = form.querySelector('input');
let serchButton = form.querySelector('button');
//Атрибути безпеки пошукової кнопки
input.addEventListener('input', evt => { 
    let count = 0;
    count = evt.target.value.length;
    if(count === 0){
        serchButton.setAttribute('disabled', true);
    } else {
        serchButton.removeAttribute('disabled');
    }
});

//Запуск процесу пошуку фільмів
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    showLoadingProcces(true);
    const data = new FormData(evt.target);
    const inputData = data.get('text');
    userSerchInput = inputData;
    curentPage = 1;
    proccesLoadingMovie(inputData);
    input.value = '';
    serchButton.setAttribute('disabled', true);
})

//Завантажити наступну сторінку
let btnLoad = document.querySelector('#load-more');
btnLoad.addEventListener('click', (evt) => {
    showBtnLoadMore(false);
    showLoadingProcces(true);
    curentPage = curentPage + 1;
    proccesLoadingMovie(userSerchInput);
})

//Завантажити олюблені фільми
let popNow = document.querySelector('#pop-now');
popNow.addEventListener('click', (evt) => {
    showBtnLoadMore(false);
    showLoadingProcces(true);
    curentPage = 1;
    userSerchInput = undefined;
    proccesLoadingMovie(userSerchInput);
})

// Фетч запит до сервака - отримуємо масиви з фільмами
const  fetchMovies = async (inputResult, page) => {
    let getPopularMovies = new Api();
    console.log(getPopularMovies);
    let moviesList = await getPopularMovies.fetchPopularMovies(inputResult, page);
    return moviesList;
}

// Фетч фільмів та їх рендер на фронт
const proccesLoadingMovie = async (inputResult) => {
    let arrOfMovies;
    console.log(inputResult);
    if(curentPage == 1 ){
        arrOfMovies = await fetchMovies(inputResult);
    } else {
        arrOfMovies = await fetchMovies(inputResult, curentPage);
    }
    let getElementContent = document.getElementById("content");
    changeChapterName(inputResult);
    renderMovies(arrOfMovies, getElementContent, inputResult);
    showLoadingProcces(false);
    if(arrOfMovies.total_pages > arrOfMovies.page){
        showBtnLoadMore(true);
    }else{
        showBtnLoadMore(false);
    }
}

// формуємо шаблон карточки фільму для фронта
const cardTemplate = ({poster_path, id, title}) => {
    let result = '';
    //if(poster_path == null){
        //return '';
    //}else{
        return result = `<div id="${id}" class="card">
        <div class="card-image">
            <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="image">
        </div>
        <h2 class="card__title">${title}</h2>
        </div>`;
    //}
}

// 
const changeChapterName = (inputResult) => {
    let chapterTitle = document.querySelector('#main-title'); 
    let textH2 = chapterTitle.querySelector('h2');
    if(inputResult === undefined){
        textH2.innerHTML = `Найпопулярніші фільми на даний час`;
    }else{
        textH2.innerHTML = `Результат пошуку фільму: ${inputResult}`;
    }
    
}

// рендеремо контент (список фільмів) на фронт 
const renderMovies = (arrOfMovies, getElement, inputResult) => {
    let cauntResult = document.querySelector('#result-caunt');
    if(arrOfMovies.total_results == 0 || arrOfMovies.total_results == undefined){
        cauntResult.innerHTML = `Немає результатів за запитом:'${inputResult}'`;
    }else{
        cauntResult.innerHTML = `Знайдено фільмів:${arrOfMovies.total_results}`;
    }
    
    let newContent = ``;
    newContent = newContent + arrOfMovies.results.reduce((acc, cur) => {
        acc += cardTemplate(cur, inputResult); 
        return acc}, "");
    if(curentPage > 1){
        getElement.insertAdjacentHTML('beforeend', newContent);
    } else {
        getElement.innerHTML = newContent;
    }   
    
}

// Показ плашки Загрузка на Фронті під час фетчингу фільмів
const showLoadingProcces = (show) => {
    let loadingIcon = document.querySelectorAll(`#loading-procces`);
    let loadingElement = loadingIcon[0].children;
    if(show===true){
        loadingElement[0].removeAttribute('hidden');
        loadingElement[1].removeAttribute('hidden');
        loadingElement[2].removeAttribute('hidden');
        loadingElement[3].removeAttribute('hidden');
    }else{
        loadingElement[0].setAttribute('hidden', true);
        loadingElement[1].setAttribute('hidden', true);
        loadingElement[2].setAttribute('hidden', true);
        loadingElement[3].setAttribute('hidden', true);
    }
}

//Відображення кнопки 'Завантажити ще'
const showBtnLoadMore = (show) => {
    if(show === true){
        btnLoad.removeAttribute('hidden');
    } else {
        btnLoad.setAttribute('hidden', true);
    }
}

proccesLoadingMovie(undefined);







