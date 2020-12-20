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

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const wApi = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=imperial&appid=15f1928a4dbbfb07a75f35e6dd48bc2c`;

  async function getWeather() {
    const response = await fetch(wApi, { mode: 'cors' });
    if (response.status === 404) {
      errorMsg.innerHTML = `
                'Name not found! Please try again.'
            `;
    } else {
      const myData = await response.json();
      mainTitle.innerHTML = `
                ${myData.name}
            `;
      temp.innerHTML = `
                ${Math.round(myData.main.temp)} F
            `;
      img.src = `http://openweathermap.org/img/w/${myData.weather[0].icon}.png`;
      img.classList.remove('d-none');
      any.innerHTML = `
                ${myData.sys.country}
            `;
      desc.innerHTML = `
                The weather in your region is ${myData.weather[0].description.toUpperCase()}!
            `;
    }
  }
  getWeather();
  searchForm.reset();
});
/******/ })()
;
//# sourceMappingURL=main.js.map