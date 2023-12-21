console.log('JS OK');


//* INITIAL VARIABLES

// BOTTONE
const buttonRoll = document.getElementById('rolldice');

// USER
const userElement = document.getElementById('user-dice');
const userBox = document.getElementById('user-box');

// CPU
const cpuElement = document.getElementById('cpu-dice');
const cpuBox = document.getElementById('cpu-box');

// RISULTATO
const resultElement = document.getElementById('result-element');
const resultBox = document.getElementById('result-box');


//@ AL CLICK SUL BOTTONE
buttonRoll.addEventListener('click', function () {

    //# RANDOMIZZO UN NUMERO DA 1 A 6 PER IL GIOCATORE
    const userDice = Math.floor(Math.random() * 6) + 1;

    //# RANDOMIZZO UN NUMERO DA 1 A 6 PER IL COMPUTER
    const cpuDice = Math.floor(Math.random() * 6) + 1;

    // STABILISCO UNA VARIABILE PER IL RISULTATO (DI DEFAULT PAREGGIO)
    let result = 'Pareggio!';

    //ELIMINO COLORE DAL RISULTATO
    resultElement.classList.remove('color-red', 'color-blue');

    console.log('user: ', userDice, 'cpu: ', cpuDice,);

    if (userDice > cpuDice) {                           // SE il numero del giocatore è più grande di quello del computer
        result = " Il giocatore ha vinto!";             // Il giocatore vince
        resultElement.classList.remove('color-red');
        resultElement.classList.add('color-blue');      // Il titolo diventa blu

    } else if (cpuDice > userDice) {                   // SE il numero del computer è più grande di quello del giocatore
        result = " Il computer ha vinto!";             // Il computer vince
        resultElement.classList.remove('color-blue');
        resultElement.classList.add('color-red');     // Il titolo diventa rosso     
    }
    console.log(result);


    //# VIENE MOSTRATO IN PAGINA IL RISULTATO DEL LANCIO DEI DADI E IL VINICITORE

    userElement.innerText = userDice;
    cpuElement.innerText = cpuDice;
    resultElement.innerText = result;
    resultBox.classList.remove('d-none');
    userBox.classList.remove('d-none');
    cpuBox.classList.remove('d-none');
})