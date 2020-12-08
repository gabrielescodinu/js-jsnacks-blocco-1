// Creare un oggetto che rappresenti un triangolo rettangolo,
// con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.
// (ripassiamo il Teorema di Pitagora ;D )

var triangolo = {
  base : 20,
  altezza : 10,
};

var area = (triangolo.base * triangolo.altezza)/2;
console.log(area);

var quadrati = (triangolo.base * triangolo.base) + (triangolo.altezza * triangolo.altezza);
var ipotenusa = Math.sqrt(quadrati);
console.log(ipotenusa);

var perimetro = triangolo.base + triangolo.altezza + ipotenusa;
console.log(perimetro);
