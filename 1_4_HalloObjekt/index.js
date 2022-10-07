/* ein Objekt mit Attributen und Methoden */
const bob = {

  /* verschiedene Attribute */
  name: 'bob',
  geburtsjahr: 2000,
  ziel: 'vietnam',

  /**
   * Gibt das Alter in Jahren zurück
   * @return {number}
   */
  alter: function() {
    return (new Date()).getFullYear() - this.geburtsjahr;
  },

  /**
   * Prüft ob das Alter größer oder gleich 18 ist und ruft den entsprechend
   * callback auf
   * @param {function} callback_volljaehrig
   * @param {function} callback_nichtVolljaehrig
   */
  volljaehrig: function(callback_volljaehrig, callback_nichtVolljaehrig) {
    if (this.alter() >= 18) {
      callback_volljaehrig(this);
    } else {
      callback_nichtVolljaehrig();
    }
  },
};

bob.volljaehrig(
    (person) => {
      const nachricht = `${person.name} ist ${person.alter()} jahre alt ` +
          `und darf nach ${person.ziel} fahren.`;
      console.log(nachricht);
    },
    () => {
      console.log(this.name, 'ist noch nicht vollständig.');
    });
