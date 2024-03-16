import { ads } from './ads/ads.js';

const adsDOM = document.getElementById('ad');
const closeDOM = adsDOM.querySelector('.close');
const resetDOM = document.querySelector('button');

closeDOM.addEventListener('click', () => {
    adsDOM.classList.add('hide');
});

resetDOM.addEventListener('click', () => {
    adsDOM.classList.remove('hide');
});