// SEARCH STUFF
// LOCATED HERE

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=9b62c3eb4a6bc8acd4e26602f16fa744";
let SEARCH_URL = BASE_URL + "search/multi?" + API_KEY + "&sort_by=popularity.desc&query=";
var chosen = false;
// Potential todo:
// And localstorage
// Movie add info
// Sound to win
// Phone ui
// Search reset on nothing

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
  if (user_input == '') {
    document.getElementById('results').classList.remove("show");
  }
});

function setMovie(movie) {
  document.getElementById('search_input').value = movie.textContent;
  document.getElementById('results').classList.remove("show");
  let img = document.getElementById('image');
  img.src = movie.children[0].src;
  img.height = movie.children[0].naturalHeight / 5;
  img.width = movie.children[0].naturalWidth / 5;
  img.classList.add('show');
  document.getElementById('movErr').classList.remove('show');
  chosen = true;
}

function checkDefault(content) {
  if (content.value != content.defaultValue && content.value != '') {
    content.classList.add('filled');
  } else {
    content.classList.remove('filled');
  }
}


// STAR STUFF
// OVER HERE

let fStar = document.getElementById('starContainer');
fStar.addEventListener('mousemove', (event) => {
  for (let i = 1; i < 6; i++) {
    document.getElementById('temp').classList.remove('st' + i);
  }
  document.getElementById('temp').classList.add('show');
  for (let i = 0; i < 10; i++) {
    if ((event.clientX - fStar.offsetLeft) / fStar.clientWidth >= i / 10) {
      if (i % 2 == 0) {
        document.getElementById((i / 2) + 1).classList.add('half', 'select');
        document.getElementById('temp').classList.add('st' + ((i / 2) + 1));
      } else {
        document.getElementById((i + 1) / 2).classList.add('full', 'select');
        document.getElementById((i + 1) / 2).classList.remove('half');
        document.getElementById('temp').classList.remove('st' + ((i + 1) / 2));
      }
    } else {
      if (i % 2 == 0) {
        document.getElementById((i / 2) + 1).classList.remove('half', 'select');
      } else {
        document.getElementById((i + 1) / 2).classList.remove('full');
      }
    }
  }
});

fStar.addEventListener('mouseleave', () => {
  for (let i = 1; i < 6; i++) {
    document.getElementById(i).classList.remove('select');
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
      document.getElementById('temp').classList.remove('st' + i);
    }
  }
});

fStar.addEventListener('mouseup', (event) => {
  document.getElementById('stErr').classList.remove('show');
  for (let i = 1; i < 6; i++) {
    document.getElementById(i).classList.remove('select');
  }
  for (let i = 0; i < 10; i++) {
    if ((event.clientX - fStar.offsetLeft) / fStar.clientWidth >= i / 10) {
      if (i % 2 == 0) {
        document.getElementById((i / 2) + 1).classList.add('half');
        document.getElementById('temp').classList.add('st' + ((i / 2) + 1));
        stars = i / 2;
      } else {
        document.getElementById((i + 1) / 2).classList.add('full');
        document.getElementById((i + 1) / 2).classList.remove('half');
        document.getElementById('temp').classList.remove('st' + ((i + 1) / 2));
        stars = i / 2;
      }
    } else {
      if (i % 2 == 0) {
        document.getElementById((i / 2) + 1).classList.remove('half');
      } else {
        document.getElementById((i + 1) / 2).classList.remove('full');
      }
    }
  }
  stars += 0.5;
})


// FEEDBACK STUFF
// AND SCREEN SWITCHING
var saved = [];

function generate() {
  let review = document.getElementById('review');
  if (chosen && stars != 0 && review.value != review.defaultValue) {
    logic();
    document.getElementById('inputPage').style.display = 'none';
    document.getElementById('loadingPage').style.display = 'block';
    document.getElementById('movErr').classList.remove('show');
    document.getElementById('stErr').classList.remove('show');
    document.getElementById('revErr').classList.remove('show');
    document.getElementById('body').style.backgroundColor = '#14181c';
    dotOn = true;
    then = Date.now();
    setDots();
    dotBounce();
    setTimeout(swapText, 2000);
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

var swapColor = '#af3a30';

function swapText() {
  document.getElementById('loadingPage').style.display = 'none';
  document.getElementById('feedbackPage').style.display = 'block';
  document.getElementById('body').style.backgroundColor = swapColor;
  dotOn = false;
  bitsOn = true;
  holder = [];
  timer = 300;
  prev = 300;
  then = Date.now();
  celebrate();
}

function backHome() {
  document.getElementById('inputPage').style.display = 'block';
  document.getElementById('feedbackPage').style.display = 'none';
  document.getElementById('body').style.backgroundColor = '#445567';
  bitsOn = false;
}

function reset() {
  document.getElementById('movErr').classList.remove('show');
  document.getElementById('stErr').classList.remove('show');
  document.getElementById('revErr').classList.remove('show');
  document.getElementById('image').classList.remove('show');
  document.getElementById('search_input').value = document.getElementById('search_input').defaultValue;
  chosen = false;
  document.getElementById('review').value = document.getElementById('review').defaultValue;
  stars = 0;
  for (let i = 1; i < 6; i++) {
    document.getElementById(i).classList.remove('full');
    document.getElementById(i).classList.remove('half');
  }
}

/*document.getElementById('review').value = 'fefefeeffefe water bitchessssss';
document.getElementById('search_input').value = 'efeef';
stars = 0;
//var test = 33;
logic();
document.getElementById('body').style.backgroundColor = swapColor;*/

function logic() {
  let rating = Math.floor(Math.random() * 3);
  //rating = data[test]['rating'];
  rating = 2;
  review = document.getElementById('review').value;
  movie = document.getElementById('search_input').value;
  if (saved.includes(review + movie + stars)) {
    rating = 0;
    document.getElementById('feedback').innerHTML = 'You\'ve done that one already.';
  } else {

    saved[saved.length] = review + movie + stars;
    let points = [];
    data.forEach(option => {
      // && option['id'] == test
      if (option['rating'] == rating && (option['logic'] == undefined || option['logic']())) {
        points[points.length] = [option['id'], ((points.length != 0) ? points[points.length - 1][1] : 0) + option['weight']];
      }
    });

    let rng = Math.floor(Math.random() * (points[points.length - 1][1] + 1));
    finding : for (let i = 0; i < points.length; i++) {
      if (points[i][1] >= rng) {
        let message = data[points[i][0]]['message'];
        message = message.replaceAll('starval', stars);
        message = message.replaceAll('movval', movie);
        if (message.includes('custval')) {
          data[points[i][0]]['logic'];
          message = message.replaceAll('custval', custom);
        }
        document.getElementById('feedback').innerHTML = message;
        break finding;
      }
    }
  }
  switch(rating) {case 0: swapColor = '#af3a30'; break; case 1: swapColor = '#dc8631'; break; case 2: swapColor = '#3a9a33'; break;};
}

// ANIMATION STUFF
// WITH CANVAS

var spot = [[498, 30, 1], [515, 37.5, -1], [532, 45, -1]];
var radius = 5.5;
var sides = [30, 45];
var small = 0.03;
var dotOn = false;
var now, elapsed, delta;
var then = Date.now();
const fps = 60;
const fpsInterval = 1000 / fps;

function dotBounce() {
  const canvas = document.getElementById("dots");
  const dots = canvas.getContext("2d");
  now = Date.now();
  elapsed = now - then;
  then = Date.now();
  delta = elapsed / fpsInterval;
  dots.canvas.width = 541;
  dots.canvas.height = 60;
  dots.clearRect(0, 0, 541, 60);
  dots.fillStyle = '#ddecfd';
  spot.forEach(circle => {
    dots.beginPath();
    dots.arc(circle[0], circle[1], radius, 0, 2 * Math.PI);
    dots.fill();
    let ease = Math.max((-(Math.abs(circle[1] - (sides[0] + sides[1]) / 2) / (sides[1] - sides[0]) / 2)+1), small);
    circle[1] += circle[2] * 0.9 * ease * (2 - ease) * delta;
    if (circle[1] <= sides[0] || circle[1] >= sides[1]) {
      circle[2] *= -1;
    }
  });
  if (dotOn) {
    window.requestAnimationFrame(dotBounce);
  }
}

function setDots() {
  if (window.getComputedStyle(document.getElementById('loading')).fontSize == '48px') {
    radius = 4.6;
    spot[0][0] = 448;
    spot[0][1] = 20;
    spot[1][0] = 462;
    spot[1][1] = 27;
    spot[2][0] = 476;
    spot[2][1] = 34;
    sides = [20, 34];
    small = 0.05;
  } else {
    radius = 5.5;
    spot[0][0] = 498;
    spot[0][1] = 30;
    spot[1][0] = 515;
    spot[1][1] = 37.5;
    spot[2][0] = 532;
    spot[2][1] = 45;
    sides = [30, 45];
    small = 0.03;
  }
}

var bitsOn = false;
var holder = [];
var timer = 300;
var prev = 300;

function celebrate() {
  const canvas = document.getElementById("bits");
  const bits = canvas.getContext("2d");
  now = Date.now();
  elapsed = now - then;
  then = Date.now();
  delta = elapsed / fpsInterval;
  bits.canvas.width = window.innerWidth;
  bits.canvas.height = window.innerHeight;
  bits.clearRect(0, 0, window.innerWidth, window.innerHeight);
  bits.font = '50pt serif'
  bits.textAlign = "center"; 
  bits.textBaseline = "middle";
  switch (swapColor) {
    case '#3a9a33':
      if (checkMod(prev, timer, 9) && timer > 0) {
        holder[holder.length] = [emojis[0][Math.floor(Math.random() * emojis[0].length)], window.innerWidth / 2, window.innerHeight + 20, Math.floor(Math.random() * 110) + 35, window.innerWidth / 271.6 , window.innerHeight / 44.7];
      }
      holder.forEach(item => {
          bits.fillText(item[0], item[1], item[2]);
          item[1] -= item[4] * Math.cos(item[3] * Math.PI / 180) * delta;
          item[2] -= item[5] * Math.sin(item[3] * Math.PI / 180) * delta;
          item[5] -= (window.innerHeight / 3576) * delta;
      });
      break;
    case '#dc8631':
      if (checkMod(prev, timer, 9) && timer > 0) {
        holder[holder.length] = [emojis[1][Math.floor(Math.random() * emojis[1].length)], Math.random() * window.innerWidth, Math.random() * window.innerHeight, 0, 1];
      }
      holder.forEach(item => {
        bits.font = item[3] + 'pt serif';
        bits.fillText(item[0], item[1], item[2]);
        item[3] += 1.6 * item[4] * delta;
        if (item[3] >= 60) {
          item[4] = -1;
        } else if (item[3] <= 0) {
          item[3] = 0;
          item[4] = 0;
        }
      });
      break;
    case '#af3a30':
      if (checkMod(prev, timer, 9) && timer > 0) {
        holder[holder.length] = [emojis[2][Math.floor(Math.random() * emojis[2].length)], Math.random() * window.innerWidth, -40, (Math.random() * 13) + 9];
      }
      holder.forEach(item => {
        bits.fillText(item[0], item[1], item[2]);
        item[2] += item[3] * delta;
      });
      break;
  }
  prev = timer;
  timer -= delta;
  if (bitsOn && timer >= -300) {
    window.requestAnimationFrame(celebrate);
  } else {
    bits.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}

function checkMod(high, low, mult) {
  high = Math.floor(high) + 1;
  low = Math.ceil(low);
  check = false
  for (let i = low; i < high; i++) {
    if (i % mult == 0) {
      check = true;
    }
  }
  return check;
}