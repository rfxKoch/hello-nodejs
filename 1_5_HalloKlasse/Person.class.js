/* eine Klasse */
class Person {

  /* der Konstruktor */
  constructor(vorname, geburtsjahr, reiseziel) {
    this.name = vorname;
    this.geburtsjahr = geburtsjahr;
    this.ziel = reiseziel;
  }

  /* ein getter, sieht aus wie ein Funktion lässt sich wie ein attribut abfragen */
  get alter() {
    return (new Date()).getFullYear() - this.geburtsjahr;
  }

  /* eine normale Methode */
  istVolljaehrig(callbackTrue, callbackFalse) {
    if (this.alter >= 18) {
      callbackTrue(this);
    } else {
      callbackFalse();
    }
  }

  /* eine Methode die das Objekt selber zurück gibt um Befehle zu verketten */
  altern() {
    --this.geburtsjahr;
    return this;
  }
}

/* Klasse als Modul exportieren */
module.exports = Person;
