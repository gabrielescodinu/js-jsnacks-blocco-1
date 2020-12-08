// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

var squadre = [
  {
  name: "roma",
  punti: 20,
  falli: 24,
  },
  {
  name: "juventus",
  punti: 30,
  falli: 50,
  },
  {
  name: "lazio",
  punti: 10,
  falli: 100,
  },
];

squadre.forEach (function(item){
  item.punti = Math.floor(Math.random() * 11);
  item.falli = Math.floor(Math.random() * 11);
});

console.log(squadre);
