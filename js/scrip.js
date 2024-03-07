/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 il prezzo del biglietto è definito in base ai km (0.21 € al km)
 va applicato uno sconto del 20% per i minorenni
 va applicato uno sconto del 40% per gli over 65.
 L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) */

 // dichiario variabili











 
//  let kilometri = parseInt(prompt ('Quanti kilometri vuoi fare?'));
//  let anni = parseInt(prompt('quanti anni hai?'));
//  let prezzoViaggio = 0.21 * kilometri;
//  console.log (kilometri,anni,prezzoViaggio)

// //controllo i valori inseriti
// if((isNaN(kilometri) && isNaN(anni)) || (isNaN(kilometri) && !isNaN(anni)) || (!isNaN(kilometri) && isNaN(anni))) {
//     console.log('valore errato'); 
// } else {
//     console.log(`i kilometri inseriti sono ${kilometri}, hai
//     ${anni} anni, prezzo del viaggio ${prezzoViaggio.toFixed(2)}€`);
// }

// //applico lo sconto 
// let minorenne = anni < 18;
// let adultoAnziano = anni >= 65;
// let messaggio =(`i kilometri inseriti sono ${kilometri}, hai ${anni} anni, il prezzo viaggio è ${prezzoViaggio.toFixed(2)}€`);

// if (minorenne) {
//     prezzoViaggio = (prezzoViaggio - (prezzoViaggio * 0.020));
//     messaggio = `hai diritto ad uno sconto! i kilometri inseriti sono ${kilometri} , i tuoi anni sono ${anni} anni , il prezzo viaggio scontato è ${prezzoViaggio.toFixed(2)}€`;

//     console.log(messaggio); 
//  } else if (adultoAnziano){
//     prezzoViaggio = (prezzoViaggio - (prezzoViaggio * 0.040));
//     messaggio = `hai diritto ad uno sconto! i kilometri inseriti sono ${kilometri} , i tuoi anni sono ${anni} anni, il prezzo viaggio scontato è ${prezzoViaggio.toFixed(2)}€`;

//     console.log(messaggio);
//  }

// document.getElementById('price').innerHTML = ` <h1> Biglietto Uber</h1>
// <h3>${messaggio}</h3>
// `;