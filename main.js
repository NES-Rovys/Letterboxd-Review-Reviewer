const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=9b62c3eb4a6bc8acd4e26602f16fa744";
let SEARCH_URL = BASE_URL + "search/movie?" + API_KEY + "&sort_by=popularity.desc&query=";
// Get shows as well

function getMovies(my_api) {
  return fetch(my_api, {
      method: 'GET',
      cache: "no-cache",
    })
    .then(res => res.json())
    .catch(err => {
      console.log(err.message);
    });
}

function renderMovies(res) {
  let ul = document.getElementById('results');
  ul.classList.add("show");
  ul.innerHTML = '';
  res.results.forEach(result => {
    let li = document.createElement('li');
    li.setAttribute('onClick', 'setMovie(this)');
    li.textContent = result.title;
    ul.appendChild(li);
    /*let img = document.createElement('img');
    img.src = "https://image.tmdb.org/t/p/w1280" + result.poster_path;
    img.width = "100";
    img.height = "100";
    ul.appendChild(img);*/
  });
}

let f = document.getElementById('search_input');
f.addEventListener('input', () => {
  let user_input = search_input.value;
  if (user_input && user_input.trim() != '') {
    let query = SEARCH_URL + user_input;
    getMovies(query).then(renderMovies)
  }
  if (f.textContent = '') {
    document.getElementById('results').classList.remove("show");
  }
});

function setMovie(movie) {
  document.getElementById('search_input').value = movie.textContent;
  document.getElementById('results').classList.remove("show");
}