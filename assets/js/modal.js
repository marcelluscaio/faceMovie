const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const body = document.querySelector("body");
const movieSearchBox = document.querySelector('#modal-search');
const searchList = document.querySelector('#search-list');
const resultGrid = document.querySelector('#result-grid');
const cardSection = document.querySelector('.card-section');

[openModalButton, closeModalButton, fade].forEach(element => {
    element.addEventListener("click", () => {
        modal.classList.toggle("hide");
        fade.classList.toggle("hide");
        body.classList.toggle("avoid-scroll");
    });
});

movieSearchBox.addEventListener("keyup", findMovies);

// load movies from API
function findMovies(){
    let searchTerm = (movieSearchBox.value).trim();
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
}

async function loadMovies(searchTerm){
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=72a1c783`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    if(data.Response === "True"){
        displayMovieList(data.Search)
    };
}


function displayMovieList(movies){
    searchList.innerHTML = "";
    for(let idx = 0; idx < movies.length; idx++){
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = movies[idx].imdbID; // setting movie id in  data-id
        movieListItem.classList.add('search-list__item');
        if(movies[idx].Poster != "N/A"){
            moviePoster = movies[idx].Poster;
        } else{
            moviePoster = "assets/images/image_not_found.png";
        };
        movieListItem.innerHTML = `
        <div class = "search-item__thumbnail">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-item__info">
            <h3>${movies[idx].Title}</h3>
            <p>${movies[idx].Year}</p>
        </div>
        `;
        searchList.appendChild(movieListItem);
    }
    loadMovieDetails();
}

function loadMovieDetails(){
    const searchListMovies = searchList.querySelectorAll('.search-list__item');
    searchListMovies.forEach(movie => {
        movie.addEventListener('click', async () => {
            // console.log(movie.dataset.id);
            searchList.classList.add('hide-search-list');
            movieSearchBox.value = "";
            const result = await fetch(`https://www.omdbapi.com/?i=${movie.dataset.id}&apikey=72a1c783`);
            const movieDetails = await result.json();
            displayMovieDetails(movieDetails);
        });
    });
}

async function displayMovieDetails(details){
    console.log(details.Title);
    console.log(typeof details.Title);
    await getCritic(details.Title);
    console.log(criticLink);
    console.log(typeof criticLink);
    resultGrid.classList.remove("hide");
    fade.style.pointerEvents = 'none';
    resultGrid.scroll(0, 0);
    resultGrid.innerHTML = `
    <div class = "result-grid__movie-poster">
        <img src = "${(details.Poster != "N/A") ? details.Poster : "assets/images/image_not_found.png"}" alt = "movie poster">
    </div>
    <div class = "result-grid__movie-info">
        <h3 class = "movie-title"> ${details.Title}</h3>
        <ul class = "movie-misc-info">
            <li class = "year"><b>Year:</b> ${details.Year}</li>
            <li class = "rated"><b>Ratings:</b> ${details.Rated}</li>
            <li class = "released"><b>Released:</b> ${details.Released}</li>
        </ul>
        <p class = "link"><b>Link:</b> ${criticLink}</p>
        <p class = "genre"><b>Genre:</b> ${details.Genre}</p>
        <p class = "director"><b>Director:</b> ${details.Director}</p>
        <p class = "writer"><b>Writer:</b> ${details.Writer}</p>
        <p class = "actors"><b>Actors: </b>${details.Actors}</p>
        <p class = "plot"><b>Plot:</b> ${details.Plot}</p>
        <p class = "language"><b>Language:</b> ${details.Language}</p>
        <p class = "awards"><b><i class = "fas fa-award"></i></b> ${details.Awards}</p>
    </div>
    `;
    let form = document.createElement("form");
    form.classList.add("form");
    let buttonAdd = document.createElement("button");
    buttonAdd.classList.add("result-button");
    buttonAdd.classList.add("button-add");
    buttonAdd.innerText = 'Add';
    buttonAdd.addEventListener('click', (e) => {
        e.preventDefault();
        fade.style.pointerEvents = 'all';
        let card = document.createElement('div');
        card.classList.add("card-section__card");
        let range = document.querySelector(".input-range");
        
        let hearts = '';
        

        if(parseInt(range.value) % 2 === 0){
            let heartsQuantity = parseInt(range.value) / 2;
            for(i=0; i < heartsQuantity; i++){
                hearts += `<svg viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.38353 0.442036C5.24099 0.301898 5.07176 0.19073 4.8855 0.114884C4.69923 0.0390381 4.49959 0 4.29797 0C4.09634 0 3.8967 0.0390381 3.71043 0.114884C3.52417 0.19073 3.35494 0.301898 3.2124 0.442036L2.91659 0.732737L2.62078 0.442036C2.33287 0.159099 1.94238 0.000146656 1.53522 0.000146659C1.12805 0.000146662 0.737565 0.159099 0.449655 0.442036C0.161746 0.724973 3.03362e-09 1.10872 0 1.50885C-3.03362e-09 1.90899 0.161746 2.29273 0.449655 2.57567L0.745464 2.86637L2.91659 5L5.08772 2.86637L5.38353 2.57567C5.52613 2.4356 5.63925 2.26928 5.71643 2.08624C5.79361 1.90319 5.83333 1.70699 5.83333 1.50885C5.83333 1.31071 5.79361 1.11452 5.71643 0.931467C5.63925 0.74842 5.52613 0.582109 5.38353 0.442036Z" fill="#BF0637"/>
                </svg>`
            }
        } else{
            let heartsQuantity = (parseInt(range.value) - 1) / 2;
            for(i=0; i < heartsQuantity; i++){
                hearts += `<svg viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.38353 0.442036C5.24099 0.301898 5.07176 0.19073 4.8855 0.114884C4.69923 0.0390381 4.49959 0 4.29797 0C4.09634 0 3.8967 0.0390381 3.71043 0.114884C3.52417 0.19073 3.35494 0.301898 3.2124 0.442036L2.91659 0.732737L2.62078 0.442036C2.33287 0.159099 1.94238 0.000146656 1.53522 0.000146659C1.12805 0.000146662 0.737565 0.159099 0.449655 0.442036C0.161746 0.724973 3.03362e-09 1.10872 0 1.50885C-3.03362e-09 1.90899 0.161746 2.29273 0.449655 2.57567L0.745464 2.86637L2.91659 5L5.08772 2.86637L5.38353 2.57567C5.52613 2.4356 5.63925 2.26928 5.71643 2.08624C5.79361 1.90319 5.83333 1.70699 5.83333 1.50885C5.83333 1.31071 5.79361 1.11452 5.71643 0.931467C5.63925 0.74842 5.52613 0.582109 5.38353 0.442036Z" fill="#BF0637"/>
                </svg>`
            }
            hearts += `<svg viewBox="0 0 3 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0.335216C2.72815 0.119374 2.38794 8.56214e-05 2.03522 8.5624e-05C1.62805 8.5627e-05 1.23756 0.159038 0.949655 0.441975C0.661746 0.724912 0.5 1.10866 0.5 1.50879C0.5 1.90892 0.661746 2.29267 0.949655 2.57561L1.24546 2.86631L3 4.59054V0.335216Z" fill="#BF0637"/>
                </svg>`
        }


        card.innerHTML = `
            <div class="card__image"><img src="${(details.Poster != "N/A") ? details.Poster : "assets/images/image_not_found.png"}"></div>
            <div class="card__information">
                <h4 class="information__movie">${details.Title}</h4>
                <h6 class="information__director">${details.Director}</h6>
                <h6 class="information__year">${details.Year}</h6>
                <div class="information__hearts">
                ${hearts}
                </div>
            </div>`;
        cardSection.appendChild(card);
        resultGrid.innerHTML = '';
        resultGrid.classList.add("hide");
        modal.classList.add("hide");
        fade.classList.add("hide");
        body.classList.remove("avoid-scroll");
            
    });
    let buttonCancel = document.createElement("button");
    buttonCancel.classList.add("result-button");
    buttonCancel.classList.add("button-cancel");
    buttonCancel.innerText = 'Cancel';
    buttonCancel.addEventListener('click', (e) => {
        e.preventDefault();
        fade.style.pointerEvents = 'all';
        resultGrid.innerHTML = '';
        resultGrid.classList.add("hide");
        
    });
    let labelRange = document.createElement('label');
    labelRange.innerHTML='How do you like this movie?';
    labelRange.setAttribute('for', 'input-range');
    labelRange.classList.add('label-range')
    
    let inputRange = document.createElement('input');
    inputRange.type = 'range';
    inputRange.min = 0;
    inputRange.max = 10;
    inputRange.value = 0;
    inputRange.setAttribute('id', 'input-range');
    inputRange.classList.add('input-range');

    let heartsLabel = document.createElement('div');
    heartsLabel.classList.add('hearts-label');
    heartsLabel.style.display = 'none';

    inputRange.addEventListener('input', (e) => {
         let hearts = document.querySelector('.hearts-label');
         hearts.style.display = 'flex';
         hearts.innerHTML = '';
         if(parseInt(e.target.value) % 2 === 0){
            let heartsQuantity = parseInt(e.target.value) / 2;
            for(i=0; i < heartsQuantity; i++){
                hearts.innerHTML += `<svg viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.38353 0.442036C5.24099 0.301898 5.07176 0.19073 4.8855 0.114884C4.69923 0.0390381 4.49959 0 4.29797 0C4.09634 0 3.8967 0.0390381 3.71043 0.114884C3.52417 0.19073 3.35494 0.301898 3.2124 0.442036L2.91659 0.732737L2.62078 0.442036C2.33287 0.159099 1.94238 0.000146656 1.53522 0.000146659C1.12805 0.000146662 0.737565 0.159099 0.449655 0.442036C0.161746 0.724973 3.03362e-09 1.10872 0 1.50885C-3.03362e-09 1.90899 0.161746 2.29273 0.449655 2.57567L0.745464 2.86637L2.91659 5L5.08772 2.86637L5.38353 2.57567C5.52613 2.4356 5.63925 2.26928 5.71643 2.08624C5.79361 1.90319 5.83333 1.70699 5.83333 1.50885C5.83333 1.31071 5.79361 1.11452 5.71643 0.931467C5.63925 0.74842 5.52613 0.582109 5.38353 0.442036Z" fill="#BF0637"/>
                </svg>`
            }
        } else{
            let heartsQuantity = (parseInt(e.target.value) - 1) / 2;
            for(i=0; i < heartsQuantity; i++){
                hearts.innerHTML += `<svg viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.38353 0.442036C5.24099 0.301898 5.07176 0.19073 4.8855 0.114884C4.69923 0.0390381 4.49959 0 4.29797 0C4.09634 0 3.8967 0.0390381 3.71043 0.114884C3.52417 0.19073 3.35494 0.301898 3.2124 0.442036L2.91659 0.732737L2.62078 0.442036C2.33287 0.159099 1.94238 0.000146656 1.53522 0.000146659C1.12805 0.000146662 0.737565 0.159099 0.449655 0.442036C0.161746 0.724973 3.03362e-09 1.10872 0 1.50885C-3.03362e-09 1.90899 0.161746 2.29273 0.449655 2.57567L0.745464 2.86637L2.91659 5L5.08772 2.86637L5.38353 2.57567C5.52613 2.4356 5.63925 2.26928 5.71643 2.08624C5.79361 1.90319 5.83333 1.70699 5.83333 1.50885C5.83333 1.31071 5.79361 1.11452 5.71643 0.931467C5.63925 0.74842 5.52613 0.582109 5.38353 0.442036Z" fill="#BF0637"/>
                </svg>`
            }
            hearts.innerHTML += `<svg viewBox="0 0 3 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0.335216C2.72815 0.119374 2.38794 8.56214e-05 2.03522 8.5624e-05C1.62805 8.5627e-05 1.23756 0.159038 0.949655 0.441975C0.661746 0.724912 0.5 1.10866 0.5 1.50879C0.5 1.90892 0.661746 2.29267 0.949655 2.57561L1.24546 2.86631L3 4.59054V0.335216Z" fill="#BF0637"/>
                </svg>`
        }
    });


    
    let rangeContainer = document.createElement('div');
    rangeContainer.classList.add('range-container');
    rangeContainer.appendChild(labelRange);
    rangeContainer.appendChild(inputRange);
    rangeContainer.appendChild(heartsLabel);
    
    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    
    buttonContainer.appendChild(buttonAdd);
    buttonContainer.appendChild(buttonCancel);

    form.appendChild(rangeContainer);
    form.appendChild(buttonContainer);


    resultGrid.appendChild(form);
}


/* //esse é o script do modal

onclick="findMovies()" Usar click ou blur? Ha necessidade?

window.addEventListener('click', (event) => {
    if(event.target.className != "form-control"){
        searchList.classList.add('hide-search-list');
    }
}); */


