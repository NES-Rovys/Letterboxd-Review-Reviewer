// SEARCH STUFF
// LOCATED HERE
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

let fSearch = document.getElementById('search_input');
fSearch.addEventListener('input', () => {
  let user_input = search_input.value;
  if (user_input && user_input.trim() != '') {
    let query = SEARCH_URL + user_input;
    getMovies(query).then(renderMovies)
  }
  if (fSearch.textContent = '') {
    document.getElementById('results').classList.remove("show");
  }
});

function setMovie(movie) {
  document.getElementById('search_input').value = movie.textContent;
  document.getElementById('results').classList.remove("show");
}

// STAR STUFF
// OVER HERE
var stars = 0;

let fStar = document.getElementById('starContainer');
fStar.addEventListener('mousemove', (event) => {
  for (let i = 1; i < 6; i++) {
    document.getElementById('temp').classList.remove('st' + i);
  }
  document.getElementById('temp').classList.add('show');
  for (let i = 0; i < 10; i++) {
    if ((event.clientX - fStar.clientLeft) / fStar.clientWidth >= i / 10) {
      if (i % 2 == 0) {
        document.getElementById((i / 2) + 1).classList.add('half');
        document.getElementById('temp').classList.add('st' + ((i / 2) + 1));
      } else {
        document.getElementById((i + 1) / 2).classList.add('full');
        document.getElementById((i + 1) / 2).classList.remove('half');
        document.getElementById('temp').classList.remove('st' + ((i + 1) / 2));
      }
    } else {
      if (i % 2 == 0) {
        document.getElementById((i / 2) + 1).classList.remove('half');
      } else {
        document.getElementById((i + 1) / 2).classList.remove('full');
      }
    }
  }
});

fStar.addEventListener('mouseleave', () => {
  console.log('leave');
  for (let i = 1; i < 6; i++) {
    if (Math.ceil(stars) >= i) {
      if (stars < i && stars > i - 1) {
        document.getElementById(i).classList.add('half');
        document.getElementById('temp').classList.add('st' + i);
      } else {
        document.getElementById(i).classList.add('full');
        document.getElementById(i).classList.remove('half');
        document.getElementById('temp').classList.remove('st' + i);
      }
    } else {
      document.getElementById(i).classList.remove('half');
      document.getElementById(i).classList.remove('full');
    }
  }
});
console.log();
fStar.addEventListener('mouseup', () => {
  for (let i = 5; i > -1; i--) {
    if (document.getElementById(i).classList.contains('full')) {
      stars = i;
      return;
    } else if (document.getElementById(i).classList.contains('half')) {
      stars = i - 0.5;
      return;
    }
  }
})