// SEARCH STUFF
// LOCATED HERE

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=9b62c3eb4a6bc8acd4e26602f16fa744";
let SEARCH_URL = BASE_URL + "search/multi?" + API_KEY + "&sort_by=popularity.desc&query=";
var chosen = false;
// And localstorage

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
    if (result.gender == undefined) {
      let li = document.createElement('li');
      li.setAttribute('onMouseDown', 'setMovie(this)');
      li.setAttribute('data-image', result.poster_path);
      li.textContent = (result.title ?? result.name);
      ul.appendChild(li);
      let img = document.createElement('img');
      img.src = "https://image.tmdb.org/t/p/w1280" + result.poster_path;
      img.width = "0";
      img.height = "0";
      li.appendChild(img);
    }
  });
}

let fSearch = document.getElementById('search_input');
fSearch.addEventListener('input', () => {
  let user_input = search_input.value;
  chosen = false;
  document.getElementById('image').classList.remove('show');
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
  let img = document.getElementById('image');
  img.src = movie.children[0].src;
  img.height = movie.children[0].naturalHeight / 10;
  img.width = movie.children[0].naturalWidth / 10;
  img.classList.add('show');
  document.getElementById('movErr').classList.remove('show');
  chosen = true;
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

fStar.addEventListener('mouseup', () => {
  document.getElementById('stErr').classList.remove('show');
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


// FEEDBACK STUFF
// NOW DOWN HERE

function generate() {
  let review = document.getElementById('review');
  if (chosen && stars != 0 && review.value != review.defaultValue) {
    document.getElementById('inputPage').style.display = 'none';
    document.getElementById('feedbackPage').style.display = 'block';
    document.getElementById('movErr').classList.remove('show');
    document.getElementById('stErr').classList.remove('show');
    document.getElementById('revErr').classList.remove('show');
    logic(document.getElementById('review').value, document.getElementById('search_input').value);
    setTimeout(swapText, 3000);
  } else {
    if (!chosen) {
      document.getElementById('movErr').classList.add('show');
    }
    if (stars == 0) {
      document.getElementById('stErr').classList.add('show');
    }
    if (review.value == review.defaultValue) {
      document.getElementById('revErr').classList.add('show');
    }
  }
}

function swapText() {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('feedback').style.display = 'block';
  document.getElementById('back').style.display = 'block';
}

function backHome() {
  document.getElementById('inputPage').style.display = 'block';
  document.getElementById('feedbackPage').style.display = 'none';
  document.getElementById('loading').style.display = 'block';
  document.getElementById('feedback').style.display = 'none';
  document.getElementById('back').style.display = 'none';
}

function reset() {
  document.getElementById('movErr').classList.remove('show');
  document.getElementById('stErr').classList.remove('show');
  document.getElementById('revErr').classList.remove('show');
  document.getElementById('search_input').value = document.getElementById('search_input').defaultValue;
  chosen = false;
  document.getElementById('review').value = document.getElementById('review').defaultValue;
  stars = 0;
  for (let i = 1; i < 6; i++) {
    document.getElementById(i).classList.remove('full');
    document.getElementById(i).classList.remove('half');
  }
}

function logic(review, movie) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]['number'] == undefined);
  }
}