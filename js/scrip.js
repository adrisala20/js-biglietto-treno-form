/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 il prezzo del biglietto è definito in base ai km (0.21 € al km)
 va applicato uno sconto del 20% per i minorenni
 va applicato uno sconto del 40% per gli over 65.
 L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) */

 // dichiario variabili

 const elUtente = document.getElementById('utente');
 const elKilometri = document.getElementById('kilometri');
 const elAnni = document.getElementById('anni');
 const elPrezzo = document.getElementById ('prezzo');
 const elButtonInvia = document.querySelector('.btn-success');
 const elButtonReset = document.querySelector('.btn.reset');
 let messaggio='';

//  console.log(elUtente, elKilometri,elAnni, elButtonInvia, elButtonReset);

let elContainer = document.querySelector('.container')

// console.log('elContainer'); 

elButtonInvia.addEventListener('click', function(){
    // console.log('hai cliccato il bottone')

    console.log('click');
    let testo = elUtente.value;
    let kilometri =(elKilometri.value);
    let anni = elAnni.value;
    let prezzo = parceInt(kilometri * 0.21);

    // applico lo sconto
    if(anni ==="minorenne"){
        prezzo = prezzo - (prezzo * 0.20);
        messagggio = `sconto del 20% applicato `;
    } else if (anni === "adultoAnziano"){
        prezzo = prezzo - (prezzo * 0.40);
        messaggio = `sconto del 40% applicato`;
    }

    document.getElementById('passeggero').innerHTML = testo
    document.getelementById('offerta').innerHTML = prezzo.toFixed(2) + '€';
} );


/* ho problemi con javascript */