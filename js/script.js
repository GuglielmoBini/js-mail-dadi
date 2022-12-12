/*
ESERCIZIO 1 - Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato.

-----------------------------------------------------------------

ESERCIZIO 2 - Finta Login

Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?

NOTE:
è vietato utilizzare il metodo includes()
La mail dell'utente va raccolta tramite input e con l'aiuto di un button , non con un prompt.
L'esito del controllo deve essere stampato in pagina

-----------------------------------------------------------------
*/

// ESERCIZIO 1
/* STEP
1- Prendo gli elementi dal DOM
2- aggiungo event listener al bottone
3- creo due costanti per i numeri random (player e cpu).
4- stabilisco quale dei due numeri random è più alto.
5- stampo in pagina i due numeri random e il vincitore.
*/
//***** Prendeo gli elementi dal DOM *****
const diceButton = document.getElementById("b-dice");
const playerNumber = document.getElementById("player-number");
const cpuNumber = document.getElementById("cpu-number");
const winner = document.getElementById("winner");

let result = "";

diceButton.addEventListener("click", function () {
  // numero random player
  const playerRandomNumber = Math.floor(Math.random() * 6) + 1;
  playerNumber.innerText = playerRandomNumber;
  // numero random cpu
  const cpuRandomNumber = Math.floor(Math.random() * 6) + 1;
  cpuNumber.innerText = cpuRandomNumber;
  // calcolo il vincitore
  if (playerRandomNumber > cpuRandomNumber) {
    result = "Player 1";
  } else if (playerRandomNumber < cpuRandomNumber) {
    result = "Cpu";
  } else {
    result = "Pareggio";
  }

  winner.innerText = result;
});

//-----------------------------------------------------------------

// ESERCIZIO 2
/* STEP
1- Prendo gli elementi dal DOM
2- invento una lista di email (array)
3- tramite form, chiedo all'utente di scrivere una email
4- aggiungo event listener al bottone
5- prendo il value della mail
6- controllo se la mail scritta dall'utente è dentro la mia lista
7- stampo a schermo se la mail è presente o meno nella mia lista
*/

// prendo gli elementi dal DOM

const inputEmail = document.getElementById("email");
const inputCheckButton = document.getElementById("check-button");
const loginResult = document.getElementById("login-result");

// invento una lista di email

const emailList = [
  "giacomoleopardi@gmail.com",
  "dantealighieri@gmail.com",
  "leonardodavinci@gmail.com",
  "lorenzodemedici@gmail.com",
];

// tramite form, chiedo all'utente di scrivere una email (in HTML)

//aggiungo event listener al bottone

inputCheckButton.addEventListener("click", function () {
  //prendo il value della mail
  const userEmail = inputEmail.value.trim();

  // controllo se la mail scritta dall'utente è dentro la mia lista

  let resultMessage =
    "<p>la mail digitata non è presente nella lista, non puoi entrare!</p>";

  for (let i = 0; i < emailList.length; i++) {
    if (userEmail === emailList[i]) {
      resultMessage = "<p>La tua email è valida, puoi entrare!</p>";
    }
  }
  loginResult.innerHTML = resultMessage;
});
