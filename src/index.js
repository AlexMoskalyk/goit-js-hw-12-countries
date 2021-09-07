// import './sass/main.scss';
import './css/styles.css'
import { fetchCountries } from './service/fetchCountries.js'
import { error} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import makeCountryListMarkUp from './templates/country-list.hbs'
import makeCountryInfoMarkUp from './templates/country-info.hbs'
import refs from './service/rerfs.js'

let debounce = require('lodash.debounce');



refs.input.addEventListener('input', debounce(getCountry, 500));


function getCountry(e) {
    const countryName = e.target.value;

    fetchCountries(countryName)
        .then(checkValue)
        .catch(err => error({ text:  'not found!' }));
    
};

const renderCountry = (markup = '') => {
    refs.list.innerHTML = markup;
}

const checkValue = countryName => {


    const length = countryName.length;

    if (length === 1) {
        return renderCountry(makeCountryInfoMarkUp(countryName));
        
    }

    if (length >= 2 && length <= 10) {
       return renderCountry(makeCountryListMarkUp(countryName));
    }

    if (length > 10) {
        renderCountry();
        return error('Too many matches found. Please enter a more specific query!');
    }
  
    
};
