// Scrivi una funzione che fonda due array (con lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var array1 = ["a", "b", "c", "d"];
var array2 = [1, 2, 3, 4];
var arrayFinal = [],

i = Math.min(array1.length, array2.length);
l = Math.min(array1.length, array2.length);

for (i = 0; i < l; i++) {
  arrayFinal.push(array1[i], array2[i]);
}

arrayFinal.push(...array1.slice(l), ...array2.slice(l));

console.log(arrayFinal);
