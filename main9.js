// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”

var lista = ["mela", "pera", "pesca", "noce"];
var a = 2;
var b = 4;
var listaVuota = [];

function intermezzo (){
  for (i = a; i < b; i++) {
    listaVuota.push(lista[i]);
  }
};

console.log(listaVuota);
