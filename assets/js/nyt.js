let reviewLink = "";

async function getReview(searchTerm) {
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&opening-date=1930-01-01:2022-01-01&api-key=AvW5MjcV0bB05yKFxjZmGYoccWxA2JEI`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    if (data == null || data.results == null) {
        reviewLink = " no NYT review found";
        return reviewLink;
    } else {
        const moviesListTitles = [];
        data.results.forEach((movie) => {
        moviesListTitles.push(movie);
        reviewLink = moviesListTitles[0].link.url; 
        return reviewLink;
        })
    }
}
