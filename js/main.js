console.log('Labas rytas, Lietuva!');

// const h1DOM = document.getElementById();
// const h1DOM = document.getElementsByClassName();
const h1DOM = document.getElementsByTagName('h1');
console.log(h1DOM[0]);

console.log(h1DOM[0].innerText);
console.log(h1DOM[0].textContent);

console.log('"' + h1DOM[0].innerText + '"');
console.log('"' + h1DOM[0].textContent.trim() + '"');

h1DOM[0].innerText = 'Paskutinis pirmadienis :('
h1DOM[0].textContent = 'Paskutinis antradienis :('

const titleDOM = document.getElementsByTagName('title');

titleDOM[0].innerText = 'AAAAAAAA';
titleDOM[0].innerText = 'BBBBBBBB';


setTimeout(() => {
    console.log('LAIKAS - 1');
}, 3000)

// let i = 0;
// setInterval(() => {
//     console.log('labas', i++);
// }, 1000);

const clockDOM = document.getElementById('clock');

clockDOM.innerText = '0:0'

let i = 0;
setInterval(() => {
    i++;
    const s = i % 60;
    const m = (i - s) / 60;

    clockDOM.innerText = `${m}:${s < 10 ? '0' : ''}${s}`;

}, 1000);

let count = 0;
setInterval(() => {
    count++;
    if (count % 2 === 0) {
        titleDOM[0].innerText = 'DOM';
    } else {
        titleDOM[0].innerText = '***New Message***';
    }
}, 1000);