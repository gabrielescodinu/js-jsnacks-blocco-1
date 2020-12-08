// Crea 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

var zucchinaUno = {
  varietà : "rosse",
  peso : 10,
  lunghezza : 20,
};

var zucchinaDue = {
  varietà : "blu",
  peso : 30,
  lunghezza : 10,
};

var zucchinaTre = {
  varietà : "verdi",
  peso : 5,
  lunghezza : 8,
};

var pesoTotale = zucchinaUno.peso + zucchinaDue.peso + zucchinaTre.peso;
console.log(pesoTotale);
