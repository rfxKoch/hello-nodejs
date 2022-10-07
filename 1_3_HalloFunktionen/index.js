/* eine einfache Prozedur */
function helloWorld() {
  console.log('Hallo Welt!');
}

helloWorld();

/* eine einfache Funktion mit Parametern */
function getHelloLocalized(languageIso639_1) {
  if (languageIso639_1 === 'de') return 'Hallo Welt!';
  return 'Hello World!';
}

console.log(getHelloLocalized('en'));


/* anonyme Funktion einer undefinierten Variablen zuweisen */
const summe = function() {
  let summe = 0;
  for (const arg of arguments) {
    summe += arg;
  }
  return summe;
};

console.log(summe(1, 1, 2, 3, 5, 8));


/* Pfeilfunktion/ fat-arrow vs. function (Teil 1) */
const hallo = name => `Hallo ${name}!`;

function hallo_nochmal(name) {
  return `Hallo ${name}!`;
}

console.log(hallo('Bob'), hallo_nochmal('Bob'));

/* Array filtern mit fat-arrow */
const gradeZahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(v => v % 2 == 0);
console.log(gradeZahlen.join('; '));


/* IIFE, immediately-invoked funktion expression */
((name) => {
  console.log(`Hallo ${name}!`);
})('Alice');
