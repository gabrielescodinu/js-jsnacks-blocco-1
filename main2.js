// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)

function reverseString(str) {
  // uso split() e mi divide le lettere creando un array
  var splitString = str.split("");

  // uso reverse() per rigirare l'array appena creato
  var reverse = splitString.reverse();

  // uso join() per unire gli elementi dell'array in un'unica stringa
  var joinArray = reverse.join("");

  // restituisco a return l'array completo
  return joinArray;
}

var parola = "ciao";

console.log(reverseString(parola));
