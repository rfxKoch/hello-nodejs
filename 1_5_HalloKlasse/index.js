const Person = require('./Person.class');

const alice = new Person(
    'Alice',
    2002,
    'Margaritaville',
);

alice.istVolljaehrig(
    (person) => {
      const nachricht = `${person.name} ist ${person.alter} jahre alt ` +
      `und darf nach ${person.ziel} fahren.`;
      console.log(nachricht);
    },
    () => {
      console.log(this.name, 'ist noch nicht vollständig.');
    });

alice.altern().istVolljaehrig(
    (person) => {
      const nachricht = `${person.name} ist ${person.alter} jahre alt ` +
      `und darf nach ${person.ziel} fahren.`;
      console.log(nachricht);
    },
    () => {
      console.log(this.name, 'ist noch nicht vollständig.');
    });
