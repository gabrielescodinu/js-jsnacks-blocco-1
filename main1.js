// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
var palla = {
  nome: "palla",
  peso: 10,
};

// Attraverso un prompt dare la possibilità all’utente
// di modificare il peso della palla.
var modifica = Number(prompt("inserisci un peso"));

palla.peso = modifica;
console.log(palla);
