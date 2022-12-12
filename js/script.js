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
