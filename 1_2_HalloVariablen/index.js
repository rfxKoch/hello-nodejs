/* Konstanter Wert, String */
const halloWelt = 'Hallo Welt';

console.log(halloWelt);


/* verscheidene Anführungszeichen, Stringkonkatination */
const halloAnfuehrungszeichen = 'foo ' +
    'bar ' +
    `baz`;

console.log(halloAnfuehrungszeichen);


/* veränderlicher Wert */
let summe = 1 + 1;
summe += 1;

console.log(summe);


/* Konstanter Typ, Array */
const liste = [
  1,
  2,
];
liste.push(3);
liste.push(4);

/* in einen String einfügen */
let insertionString = `Meine Liste enthält ${liste.length} Elemente: ${liste.join()}`;

console.log(insertionString);


/* klassisches Liste durchlaufen */
for (let i = 0; i < liste.length; i++) {
  console.log('for', i, liste[i]);
}

/* Liste anhand der Indices itterieren */
for (const i in liste) {
  if (liste[i]) {
    /* nur ungrade Indices anzeigen */
    if (i % 2 == 1) {
      console.log('for-in', i, liste[i]);
    }
  }
}

/* Liste anhand der Indices itterieren */
for (const wert of liste) {
  /* alles zwischen 1 und 4 anzeigen */
  if (wert > 1 && wert < 4) {
    console.log('for-of', wert);
  }
}


let leereListe = liste;

/* Liste rückwärts durchlaufen */
for (let i = leereListe.length - 1; i >= 0; --i) {
  leereListe = leereListe.splice(i, 1);
}

/* statische Objekt */
const alice = {
  age: 17,
  hair: 'blond',
};
const bob = {
  age: 18,
};

/* veränderungen in einem Objekt */
bob.age = 19;
bob.location = 'vietnam';

console.log(
    alice,
    bob,
);
