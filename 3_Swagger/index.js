const fs = require('fs');
const jsyaml = require('js-yaml');

const yamlContent = fs.readFileSync('petstore.yaml');
const petStore = jsyaml.load(yamlContent.toString());

console.log(JSON.stringify(petStore));
