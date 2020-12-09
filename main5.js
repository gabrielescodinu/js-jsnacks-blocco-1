// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)

function reverseString(str) {
  var splitString = str.split("").reverse().join("");
  return splitString;
}

var parola = "ciao";

console.log(reverseString(parola));
