//funzione che genera array di numeri casuali
function arrayDiNumeriCasuali(number, max, min) {
  const numberArray = parseInt(number);
  console.log(numberArray);
  const numbMin = parseInt(min);
  const numbMax = parseInt(max);
  const array = [];
  let numeroCasuale;

  for (let i = 0; i < numberArray; i++) {
    let numeroCasuale = Math.floor(Math.random() * (numbMax - numbMin));
    array.push(numeroCasuale);
  }
  return console.log(array);
}
const number = number(prompt("Quanti numeri vuoi inserire"));
const max = number(prompt("inserisci il valore maggiore"));
const min = number(prompt("inserisci il valore maggiore"));
//numero di elementi di array
//valore minimo dei numeri casuali e valore max
arrayDiNumeriCasuali(number, max, min);
