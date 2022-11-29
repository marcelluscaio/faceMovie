let criticLink = "";

async function getCritic(searchTerm) {
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&opening-date=1930-01-01:2022-01-01&api-key=AvW5MjcV0bB05yKFxjZmGYoccWxA2JEI`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    if (data == null || data.results == null) {
        criticLink = " no NYT review found";
        return criticLink;
    } else {
        const moviesListTitles = [];
        data.results.forEach((movie) => {
        moviesListTitles.push(movie);
        criticLink = moviesListTitles[0].link.url; 
        return criticLink;
        })
    }
}
