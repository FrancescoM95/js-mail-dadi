console.log('JS OK');


//|-------- ESERCIZIO 1 ---------


//* INITIAL VARIABLES

// BOTTONE
const buttonRoll = document.getElementById('rolldice');

// GIOCATORE
const userElement = document.getElementById('user-dice');
const userBox = document.getElementById('user-box');

// COMPUTER
const cpuElement = document.getElementById('cpu-dice');
const cpuBox = document.getElementById('cpu-box');

// RISULTATO
const resultElement = document.getElementById('result-element');
const resultBox = document.getElementById('result-box');


//@ AL CLICK SUL BOTTONE TIRA I DADI
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
        resultElement.classList.add('color-blue');      // Il risultato diventa blu

    } else if (cpuDice > userDice) {                   // SE il numero del computer è più grande di quello del giocatore
        result = " Il computer ha vinto!";             // Il computer vince
        resultElement.classList.remove('color-blue');
        resultElement.classList.add('color-red');     // Il risultato diventa rosso     
    }
    console.log(result);


    //# VIENE MOSTRATO IN PAGINA IL RISULTATO DEL LANCIO DEI DADI E IL VINICITORE

    userElement.innerText = userDice;
    cpuElement.innerText = cpuDice;
    resultElement.innerText = result;
    userBox.classList.remove('d-none');
    cpuBox.classList.remove('d-none');
    resultBox.classList.remove('d-none');
})






//|-------- ESERCIZIO 2 ---------


//* INITIAL VARIABLES

const emailElement = document.getElementById('email');
const messageElement = document.getElementById('message');

// BOTTONI
const buttonVerify = document.getElementById('verify');
const buttonReset = document.getElementById('reset');


//* Creo un array con la lista di email autorizzate
const autorizedEmail = [
    'blablabla@email.com',
    'latuaemail@email.com',
    'emailautorizzata@email.com',
    'boolean@email.com'
];

//@ AL CLICK SUL BOTTONE VERIFICA
buttonVerify.addEventListener('click', function () {

    messageElement.classList.remove('color-red', 'color-green');

    //* Stabilisco una variabile per la email e una per il messaggio
    let emailFound = false;
    let message;

    //* Leggo l'email inserita dall'utente
    let userEmail = emailElement.value;
    console.log(userEmail);

    //! VALIDAZIONE
    if (!userEmail) {
        alert('Inserisci una email');
        return;
    }

    //* Controllo tra le email autorizzate presenti nell'array per verificare l'email inserita dall'utente
    for (let i = 0; i < autorizedEmail.length && !emailFound; i++) {
        if (userEmail === autorizedEmail[i]) emailFound = true;
    }

    if (emailFound) {                                 //# SE l'email è presente 
        message = 'Email autorizzata. Benvenuto!';
        messageElement.classList.add('color-green');
    } else {                                         //# OPPURE non è presente  
        message = 'Spiacenti, l\'accesso non è consentito con questa email.';
        messageElement.classList.add('color-red');
    }
    console.log(message);

    //* Mostro il messaggio in pagina
    messageElement.innerText = message;
    messageElement.classList.remove('d-none');
});


//@ AL CLICK SUL BOTTONE RESET
buttonReset.addEventListener('click', function () {
    emailElement.value = '';
    messageElement.classList.add('d-none');
})