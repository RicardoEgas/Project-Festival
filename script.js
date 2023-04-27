// mobile-menu
const burger = document.querySelector('.burger-button');
const nav = document.querySelector('.nav-bar');
const header = document.querySelector('header');
const links = document.querySelectorAll('.nav-list');

function toggleMenu() {
  nav.classList.toggle('active');
  header.classList.toggle('active');
}

function close() {
  nav.classList.remove('active');
  header.classList.remove('active');
}

burger.addEventListener('click', toggleMenu);
links.forEach((n) => n.addEventListener('click', close));

// Javascript objects

const band = [
  {
    name: 'Kendrick Lamar',
    genre: 'Hip hop/ progressive rap/ West Coast hip hop/ conscious hip hop/ jazz rap',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'images/kendrick_1.jpg',
  },
  {
    name: 'The Prodigy',
    genre: 'Big beat/ electropunk/ alternative dance/ electronic rock',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'images/the-prodigy.jpeg',
  },
  {
    name: 'Tame Impala',
    genre: 'Psychedelic pop/ psychedelic rock/ indie rock/ synth-pop/ neo-psychedelia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'images/tame_impala.jpg',

  },
  {
    name: 'ThunderCat',
    genre: ' Funk/ progressive R&B/ soul/ Hip Hop Soul/ Neo Soul/ electronica/ acid jazz',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'images/thundercat.jpg',
  },
  {
    name: 'Slipknot',
    genre: 'Nu metal/ alternative metal/ groove metal/ heavy metal/ hard rock',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'images/slipknot.jpg',
  },
  {
    name: 'Bad Religion',
    genre: 'Hardcore punk/ melodic hardcore/ skate punk/ punk rock',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'images/Bad-Religion.jpg',
  },
];

const lineup = document.getElementById('featured-bands');

const name = band.map((artist) => artist.name);

const genre = band.map((artist) => artist.genre);

const description = band.map((artist) => artist.description);

const image = band.map((artist) => artist.image);

lineup.insertAdjacentHTML('afterbegin', '<h2 class="feat-artists">Featured Artists</h2>');

for (let i = 0; i < band.length; i += 1) {
  lineup.insertAdjacentHTML('beforeend', `
    <div class="lineup">
    <img src="${image[i]}" class="band-image" alt=""></img>
    <ul class="band">
    <li class="nameBand">${name[i]}</li>
    <li class="genreBand">${genre[i]}</li>
    <li class="descrptionBand">${description[i]}</li>
    </ul>
    </div>`);
}