class Api {
    constructor() {
        this.url = "https://api.themoviedb.org/3/movie/popular?";
        this.apiKey = "api_key=c1f1bfcf10259d5f3d7bd66da82c97f0&";
        this.language = "language=en-US&";
        this.page = "page=1";
        
    }
    async fetchPopularMovies() {
        const response = await fetch(`${this.url}${this.apiKey}${this.language}${this.page}`);
        const promMoviesList = await  response.json();
        console.log(promMoviesList);
        return promMoviesList;
    }
}

const  fetchPopularMovies = async () => {
    try{
        let getPopularMovies = new Api();
        let moviesList = await getPopularMovies.fetchPopularMovies();
        return moviesList.results;
    } catch(error) {
        console.log(error);
    }
}


const cardTemplate = ({poster_path, id, title}) => {
    let result = `<div id="${id}" class="card">
        <div class="card-image">
            <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="image">
        </div>
        <h2 class="card__title">${title}</h2>
    </div>`;
    return result;
}

const pushElementToFront = (arrOfMovies) => {
    
    let getElement = document.getElementById("content");
    //let newCard = document.createElement('div');
    let newContent = arrOfMovies.reduce((acc, cur) => {
        acc += cardTemplate(cur); 
        return acc}, "");
    console.log(newContent);
    getElement.innerHTML = newContent;
    
}


const removeElem = (id) => {
    let getElement = document.getElementById(`${id}`);
    getElement.remove();
}


const addAllMoviesToHtml = async () => {
    try{
        let moviesArr = await fetchPopularMovies();
        pushElementToFront(moviesArr);
        removeElem("loading-procces");
    } catch(error) {
        console.log(error);
    }
}

addAllMoviesToHtml();