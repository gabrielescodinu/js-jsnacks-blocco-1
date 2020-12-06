// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine

var zucchineLunghe = [];
var zucchineCorte = [];

function lunghezza (zucchina, lunghezzaZucchina) {
  var zucchina;
  if (lunghezzaZucchina > 15) {
    zucchineLunghe.push(zucchina);
  } else {
    zucchineCorte.push(zucchina);
  }
};

// zucchine
var zucchinaUno = {
  colore: "rosse",
  lunghezza : 20,
};
lunghezza (zucchinaUno, zucchinaUno.lunghezza);

var zucchinaDue = {
  colore: "blu",
  lunghezza : 10,
};
lunghezza (zucchinaDue, zucchinaDue.lunghezza);

var zucchinaTre = {
  colore: "verdi",
  lunghezza : 30,
};
lunghezza (zucchinaTre, zucchinaTre.lunghezza);

var zucchinaUno = {
  colore: "bianche",
  lunghezza : 5,
};
lunghezza (zucchinaUno, zucchinaUno.lunghezza);


console.log(zucchineLunghe);
console.log(zucchineCorte);


var sommaLunghe = zucchineLunghe.reduce(function(previousValue, currentValue) {
  return {
    lunghezza: previousValue.lunghezza + currentValue.lunghezza,
  }
});
console.log(sommaLunghe);

var sommaCorte = zucchineCorte.reduce(function(previousValue, currentValue) {
  return {
    lunghezza: previousValue.lunghezza + currentValue.lunghezza,
  }
});
console.log(sommaCorte);
