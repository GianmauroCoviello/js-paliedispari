
// VARIABILE CON PROMPT
let parola= (prompt('inserisci una parola'))

// INIZIO DELLA FUNZIONE 
function controlloParola() {

    // VARIABILE CON LA FUNZIONE SPLIT E JOIN
    let text = parola.split('').join('')
    
    // VARIABILE CON LA FUNZIONE SPLIT, REVERSE E JOIN
    let reverseText = parola.split('').reverse().join('')
   

    // CONDIZIONE TRA LE DUE VARIABILI 
    if (text === reverseText) {
        document.getElementById("control").innerHTML = ('la parola inserita è PALINDROMA')
        
    }
    else{
        document.getElementById("control").innerHTML = ('la parola inserita NON è PALINDROMA')

    }
    return;


    
}
// FINE DELLA FUNZIONE 


// INVOCAZIONE DELLA FUNZIONE 
controlloParola();

