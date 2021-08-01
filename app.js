//6b6000a40725f177f50be50f5c8087b8
const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b6000a40725f177f50be50f5c8087b8%page=1";

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}
