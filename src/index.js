// import './sass/main.scss';
let debounce = require('lodash.debounce');
const refs = {
    input: document.querySelector('#js-input'),
    list: document.querySelector('.country-list')
};

refs.input.addEventListener('input', getCountry);

function getCountry(e) {
    fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`).then(response => console.log(response))
};