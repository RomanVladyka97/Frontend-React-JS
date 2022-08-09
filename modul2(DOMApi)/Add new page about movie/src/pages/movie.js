const root = document.getElementById('app');
export function MovieDetail(){
    const { pathname } = window.location;
    const [, id] = pathname.split('movie/:');
    root.innerHTML = `<h1>${id}</h1>`;
    const layout = `
    <header class="header"><div class="container header__container">
            <span ><a class="header__title">TheMovieDB PoC</a></span>
            <nav class="header__navigation nav">
                <ul class="nav__list">
                    <li class="nav__list pop pop-active" id="pop-now">Popular Movies</li>
                    <li class="nav__list fav" id="bookmarks">Bookmarks</li>
                </ul>
                <form id="serch-form" class="header__serch">
                    <span class="serch-title">Знайти фільм</span>
                    <input name="text" placeholder="Search">
                    <button disabled type="submit" class="serch-submit"> Пошук </button>
                </form>
            </nav>
        </div>
    </header>
    <main class="main">
        <div class="container main__container" id="main-container">
            <div class="main__title" id="main-title">
                <h1>Детальніше про фільм</h1>
            </div>
            <div id="content" class="main__content">
            </div>
        </div>
    </main>
    <footer class="footer">
        <div class="container footer__container">Practice: Add new page about movie</div>
    </footer>`;
    root.innerHTML = layout;
    class Api {
        constructor(){
            if(typeof Api.instance === 'object'){
                return Api.instance;
            }
            this.movieDetailUrl = "https://api.themoviedb.org/3/movie/";
            this.apiKey = "api_key=c1f1bfcf10259d5f3d7bd66da82c97f0";
            this.language = "language=uk";
            this.filmId = '';
            Api.instance = this;
            return this;
        }
        async fetchMovieDetail(id) {
            this.filmId = id;
            let response;
            if(this.filmId === undefined){
                return;
            }else{
                response = await fetch(`${this.movieDetailUrl}${this.filmId}?${this.apiKey}&${this.language}`);
            }
            const promMoviesList = await  response.json();
            return promMoviesList;
        }
    }
    let getElementContent = document.querySelector("header");
        getElementContent.addEventListener('click', (evt) => {
        let nav = evt.target.closest('li');
        let logo = evt.target.closest('a');
        let input = evt.target.closest('input');
        if(nav !== null || logo !== null || input !== null){
            window.history.back();
        }
    });
    // Фетч запит до сервака - отримуємо масиви з фільмами
    const  fetchMovie = async (id) => {
        let getMovie = new Api();
        let movieDetail = await getMovie.fetchMovieDetail(id);
        console.log(movieDetail);
        return movieDetail;
    }
    const movieDetailFront = ({poster_path, title, vote_average, overview, genres, id, backdrop_path}) => {
        let result = '';
        result = `
        <style>
            .main__content{    background-size: cover;
            background-repeat: no-repeat;
            background-image: url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path});}
        </style>
        <div id="${id}" class="film-detail">
        <style>
        .film-detail{    background-image: linear-gradient(to right, rgba(31.5, 31.5, 94.5, 1) 150px, rgba(31.5, 31.5, 94.5, 0.84) 100%);
        </style>
            <div class="film-poster">
                <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}" alt="film-poster">
            </div>
            <div class="film-info">
                <ul class="details-list">
                    <li class="details-element title">
                        <div><h2>${title}</h2></div> 
                    </li>
                    <li class="details-element genres">
                        <div>Категорії:</div>
                        <div>${genres.reduce((acc, cur) => {acc +=`<span class="genre-element">${cur.name}</span>`;
                        console.log(cur.name)
                        return acc;
                        }, "")}</div>
                    </li>
                    <li class="details-element vote">
                        <div>Середня оцінка: </div>
                        <div>${vote_average}</div> 
                    </li>
                    <li class="details-element overview">
                        <div>Опис: </div>
                        <div>${overview}</div> 
                    </li>
                </ul>
            </div>
            </div>`;  
        return result
    }
    const proccesLoadFavMovies = async (id) => {
        let filmDetails = await fetchMovie(id);
        console.log(filmDetails);
        let content = document.getElementById("content");
        let filmHtml = movieDetailFront(filmDetails);
        console.log(filmHtml);
        console.log(content);
        content.innerHTML = filmHtml;
    }
    proccesLoadFavMovies(id);
}