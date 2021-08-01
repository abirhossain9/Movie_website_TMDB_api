//6b6000a40725f177f50be50f5c8087b8 data fetching from api
const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b" +
  "6000a40725f177f50be50f5c8087b8&page=1";

const searchUrl =
  "https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=6b" +
  "6000a40725f177f50be50f5c8087b8&query=";
const imagePath = "https://image.tmdb.org/t/p/w1280";
getMovies(url);
//api request
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  renderMovies(data.results);
}
getMovies(url);
//javascript selectors

const main = document.querySelector(".main");
const form = document.querySelector("form");
const input = document.querySelector("#search");
//render function

function renderMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const movieTitle = movie.title;
    const movieRating = movie.vote_average;
    const moviePoster = movie.poster_path;
    const movieOverview = movie.overview;

    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");
    movieDiv.innerHTML = `
        <img
          src="${imagePath + moviePoster}"
          alt="${movieTitle}"
        />
        <div class="movie-info">
          <h3>${movieTitle}</h3>
          <span class="${getScoreClass(movieRating)}">${movieRating}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
         ${movieOverview}
        </div>
    `;
    main.appendChild(movieDiv);
  });
}

function getScoreClass(score) {
  if (score >= 8) {
    return "green";
  } else if (score >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const serachValue = input.value.trim();
  if (serachValue && serachValue != " ") {
    getMovies(searchUrl + serachValue);
    serachValue = "";
  } else {
    window.location.reload();
  }
});
