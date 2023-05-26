// INSERIMENTO DEI PROMPT 
let scelta = (prompt('scegli pari o dispari'))
let sceltaFatta= (` utente ha scelto: ${scelta}` )

console.log(sceltaFatta)

// VERIFICA PROMPT CON CICLO WHILE
while (scelta !== 'pari' && scelta !== 'dispari') {

    scelta = prompt('la tua scelta deve essere o pari o dispari')
}


let sceltaNumber = parseInt(prompt('scegli un numero da 1 a 5'))

while (scelta < 1 || sceltaNumber > 5) {

    scelta = prompt('reinserisci il numero')
}

// FUNZIONE PER GENERARE IL NUMERO RANDOM DEL PC
function numberRandom(max,min) {

    return Math.floor(Math.random() * ( max - min - 1) + min)
    
}

// NUMERO RANDOM PC DA 1 A 5
let numberComputer= numberRandom(5,1)



// SOMMA TRA IL NUMERO INSERITO NEL PROMPT DALL'UTENTE E IL NUMERO RANDOM GENERATO DAL PC
let somma = sceltaNumber + numberComputer
console.log(somma)

// FUNZIONE PER DEFINIRE SE IL RISULTATO DELLA SOMMA SIA PARI O DISPARI
function verificaVincitore(num) {

    if (num % 2 == 0) {
        return 'pari'
        
    } else{
        return 'dispari'
    }
    
}



console.log(verificaVincitore(somma))

let utente = verificaVincitore(somma)

// CONDIZIONE PER DEFINIRE IL VINCITORE IN BASE AL RISULTATO E ALLA SCELTA CHE HA EFFETTUATO L'UTENTE
if (utente === scelta) {
    console.log('hai vinto')
    
} else{
    console.log('ha vinto il PC')
}




