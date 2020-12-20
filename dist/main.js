/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const searchForm = document.getElementById('search');
const searchInput = document.getElementById('search-word');
const mainTitle = document.querySelector('h3');
const temp = document.querySelector('h4');
const img = document.querySelector('img');
const desc = document.querySelector('p');
const any = document.querySelector('h5');
const errorMsg = document.getElementById('error');

function errorMsgs() {
  errorMsg.innerHTML = `
  'Name not found! Please try again.'
`;
}

function displayData(data) {
  mainTitle.innerHTML = `
  ${data.name}
`;
  temp.innerHTML = `
  ${Math.round(data.main.temp)} F
`;
  img.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  img.classList.remove('d-none');
  any.innerHTML = `
  ${data.sys.country}
`;
  desc.innerHTML = `
  The weather in your region is ${data.weather[0].description.toUpperCase()}!
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