/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const searchForm = document.getElementById('search')
const searchInput = document.getElementById('search-word')
const searchBtn = document.getElementById('search-btn')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const wApi = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=15f1928a4dbbfb07a75f35e6dd48bc2c`

    async function getWeather() {
        const response = await fetch(wApi, {mode: 'cors'})
        const myData = await response.json();
        console.log(myData)
    }
    getWeather()

    searchForm.reset();
})
/******/ })()
;
//# sourceMappingURL=main.js.map