import {validateIp} from './helpers';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
    if (validateIp(ipInput.value)) {
        fetch(`
        https://geo.ipify.org/api/v2/country?apiKey=at_1wZdWKc20zasWKFvlV7yxXK0VhtL8&ipAddress=${ipInput.value}`)
        .then(response => response.json())
        .then(console.log);
    }
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData();
    }
}