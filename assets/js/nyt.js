let criticLink = "";


async function getCritic(searchTerm) {
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&opening-date=1930-01-01:2022-01-01&api-key=AvW5MjcV0bB05yKFxjZmGYoccWxA2JEI`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    console.log(typeof data);
    if (data !== null) {
        const moviesListTitles = [];
        if (data.results == null) {
            console.log('no results');
            criticLink = " no NYT critic found";
        } else {
            data.results.forEach((movie, indice) => {
                if(movie.display_title == searchTerm) {
                    moviesListTitles.push(movie);
                }
                // console.log(moviesListTitles);
                criticLink = moviesListTitles[0].link.url; 
                // console.log(typeof criticLink);    
                // console.log(criticLink);
                return criticLink;
            })
        }
    } else {
        criticLink = "no critic found";
        return criticLink;
    }
}