/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const searchForm = document.getElementById('search');
const searchInput = document.getElementById('search-word');
const mainTitle = document.querySelector('.city');
const temp = document.querySelector('.temp');
const img = document.querySelector('img');
const desc = document.querySelector('.desc');
const country = document.querySelector('.country');
const errorMsg = document.getElementById('error');
const main = document.querySelector('.main');
const wind = document.querySelector('.wind');
const hum = document.querySelector('.hum');
function errorMsgs() {
  errorMsg.innerHTML = `
  'Name not found! Please try again.'
`;
  setTimeout(() => { errorMsg.innerHTML = ''; }, 3000);
}

function displayData(data) {
  mainTitle.innerHTML = `
    ${data.name} /
`;
  temp.innerHTML = `
    ${Math.round(data.main.temp)} F°
`;
  img.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  img.classList.remove('d-none');
  country.innerHTML = `
    ${data.sys.country}
`;
  desc.innerHTML = `
    ${data.weather[0].description.toUpperCase()}
`;
  main.innerHTML = `
    ${data.weather[0].main}
`;
  wind.innerHTML = `
    ${Math.round(data.wind.speed)} / mph
`;
  hum.innerHTML = `
    ${data.main.humidity}%
`;
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const wApi = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=imperial&appid=15f1928a4dbbfb07a75f35e6dd48bc2c`;

  async function getWeather() {
    const response = await fetch(wApi, { mode: 'cors' });
    if (response.status === 404) {
      errorMsgs();
    } else {
      const myData = await response.json();
      displayData(myData);
    }
  }
  getWeather();
  searchForm.reset();
});
/******/ })()
;
//# sourceMappingURL=main.js.map