
// Vienas budas:
// const counterDOM = document.getElementsByClassName('counter')[0];

const counterDOM = document.querySelector('.counter');

const numberDOM = counterDOM.querySelector('div');
// const buttonsDOM = counterDOM.getElementsByTagName('button');
const buttonsDOM = counterDOM.querySelectorAll('button');

const plusDOM = buttonsDOM[0];
const minusDOM = buttonsDOM[1];



// 1) turime ivardinti koki ivyki norime stebeti (ivykiu yra daug, paspaudus '' visas ismeta), 
// 2) ka daryti? Funkcija.

let count = 0;
function plus() {
    count++;
    numberDOM.innerText = count;
}

function minus() {
    count--;
    numberDOM.innerText = count;
}

plusDOM.addEventListener('click', plus);
minusDOM.addEventListener('click', minus);

