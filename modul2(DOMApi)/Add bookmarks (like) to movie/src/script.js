// Клас фільму
class Movie {
    constructor(id, poster_path, title, isFavorite){
        this.id = id;
        this.poster_path = poster_path;
        this.title = title;
        this.isFavorite = isFavorite;
    }
    saveMovie(){
        let modifyCurFavMovies = getFavMovies();
        if(modifyCurFavMovies === null){
            modifyCurFavMovies = [];
        }
        modifyCurFavMovies.unshift(this);
        localStorage.setItem(`favMovies`, JSON.stringify(modifyCurFavMovies));
    }
}
const delFavMovie = (id) => {
    let CurFavMovies = getFavMovies();
    if(CurFavMovies !== null){
        let modifyCurFavMovies = CurFavMovies.filter((favMovies) => (Object.values(favMovies))[0]!== id);
        localStorage.setItem(`favMovies`, JSON.stringify(modifyCurFavMovies));
    }
}
const getFavMovies = () => {
    let curFavMovies = [];
    curFavMovies = localStorage.getItem('favMovies');
    return JSON.parse(curFavMovies);
}
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
    async fetchMovies(inputText, page) {
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

// Фетч запит до сервака - отримуємо масиви з фільмами
const  fetchMovies = async (inputResult, page) => {
    let getMovies = new Api();
    let moviesList = await getMovies.fetchMovies(inputResult, page);
    return moviesList;
}

let userSerchInput = undefined;
let curentPage = 1;
let pageName = 'main';

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
    pageName = 'main';
    listLi[0].classList.remove('pop-active');
    listLi[1].classList.remove('fav-active');
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

//Завантажити популярні фільми
let listLi = document.querySelectorAll('li');
listLi[0].addEventListener('click', (evt) => {
    pageName = 'main';
    listLi[1].classList.remove('fav-active');
    listLi[0].classList.add('pop-active');
    showBtnLoadMore(false);
    showLoadingProcces(true);
    curentPage = 1;
    userSerchInput = undefined;
    proccesLoadingMovie(userSerchInput);
})

listLi[1].addEventListener('click', (evt) => {
    pageName = 'fav';
    listLi[0].classList.remove('pop-active');
    listLi[1].classList.add('fav-active');
    showBtnLoadMore(false);
    showLoadingProcces(true);
    proccesLoadFavMovies(getElementContent);
    showLoadingProcces(false);
})

let getElementContent = document.getElementById("content");
    getElementContent.addEventListener('click', (evt) => {
    let ElementLikeBtn = evt.target.closest('#fa-heart');
    let elementFilm = evt.target.closest('div.card');
    if(ElementLikeBtn !== null){
        ElementLikeBtn.classList.toggle('fa-solid');
        let isfavorite = elementFilm.hasAttribute('isfavorite');
        if (isfavorite === true) {
            delFavMovie(elementFilm.id);
            elementFilm.removeAttribute('isfavorite');
            if (pageName === 'fav'){
                proccesLoadFavMovies(getElementContent);
            }
        } else {
            let newFavMovie = new Movie(elementFilm.id, elementFilm.children[0].children[0].src,
                elementFilm.children[2].innerHTML, true);
            newFavMovie.saveMovie();    
            elementFilm.setAttribute('isfavorite', true);
        }
    }
});

// Фетч фільмів та їх рендер на фронт
const proccesLoadingMovie = async (inputResult) => {
    let arrOfMovies;
    if(curentPage == 1 ){
        arrOfMovies = await fetchMovies(inputResult);
    } else {
        arrOfMovies = await fetchMovies(inputResult, curentPage);
    }
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
const cardTemplate = ({poster_path, id, title}, isFavMovie) => {
    let result = '';
    result = `<div ${(isFavMovie === true) ? 'isfavorite="true"' : ''} id="${id}" class="card">
        <div class="card-image">
            <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="image">
        </div>
        <a class="card__follow-box follow-box-active">
            <i id="fa-heart" class="fa-heart fa-regular fa-2xl ${(isFavMovie === true) ? 'fa-solid':''}"></i>
        </a>
        <h2 class="card__title">${title}</h2>
        </div>`;  
    return result
}
//
const changeChapterName = (inputResult) => {
    let chapterTitle = document.querySelector('#main-title'); 
    let textH2 = chapterTitle.querySelector('h2');
    if(inputResult === undefined){
        if (pageName === 'fav'){
            textH2.innerHTML = `Ваші олюблені фільми`;
        } else {
            textH2.innerHTML = `Найпопулярніші фільми на даний час`;
        }
    }else{
        textH2.innerHTML = `Результат пошуку фільму: ${inputResult}`;
    }   
}
// рендрер кількості колекції фільмів
const filmsCountResult = (arrOfMovies, inputResult) => {
    let cauntResult = document.querySelector('#result-caunt');
    if(arrOfMovies.total_results == 0 || arrOfMovies.total_results == undefined){
        cauntResult.innerHTML = `Немає результатів за запитом:'${inputResult}'`;
    }else{
        cauntResult.innerHTML = `Колекція з ${arrOfMovies.total_results} фільмів:`;
    }
    if (pageName === 'fav'){
        cauntResult.innerHTML = `Колекція з ${arrOfMovies.length} фільмів:`;
    }
}
// рендеремо контент (список фільмів) на фронт 
const renderMovies = (arrOfMovies, getElement, inputResult) => {
    filmsCountResult(arrOfMovies, inputResult);
    let newContent = '';
    let curFavMovies = getFavMovies();
    if(curFavMovies === null){
        curFavMovies = [];
    }
    let isFavorite;
    newContent = newContent + arrOfMovies.results.reduce((acc, cur) => {
        curFavMovies.find((element) => {isFavorite = Object.values(element).includes(`${cur.id}`);
        return isFavorite;});
        acc += cardTemplate(cur, isFavorite);
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

const proccesLoadFavMovies = (content) => {
    let curFavMovies = getFavMovies();
    changeChapterName(undefined);
    if(curFavMovies === null){
        curFavMovies = [];
    }
    filmsCountResult(curFavMovies, undefined);
    let newContent = '';
    newContent = newContent + curFavMovies.reduce((acc, cur) => {
        acc += cardTemplate(cur, true);
        return acc}, "");
    content.innerHTML = newContent;
}

proccesLoadingMovie(undefined);






