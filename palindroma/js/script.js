
// VARIABILE CON PROMPT
let controllo = (prompt('inserisci una parola'))

// INIZIO DELLA FUNZIONE 
function controlloParola(parola) {

    // VARIABILE CON LA FUNZIONE SPLIT E JOIN
    let text = parola.split('').join('')
    
    // VARIABILE CON LA FUNZIONE SPLIT, REVERSE E JOIN
    let reverseText = parola.split('').reverse().join('')
   

    // CONDIZIONE TRA LE DUE VARIABILI 
    if (text === reverseText) {

        return document.getElementById("control").innerHTML = ('la parola inserita è PALINDROMA')
        
    }
    else{
        return document.getElementById("control").innerHTML = ('la parola inserita NON è PALINDROMA')

    }
    
}
// FINE DELLA FUNZIONE 


// INVOCAZIONE DELLA FUNZIONE 
controlloParola(controllo);

