var Cat = require('./cat');
var Mouse = require('./mouse')
var readlineSync = require('readline-sync');

var cat = new Cat();
var mouse = new Mouse();
 
cat.name = readlineSync.question('What is the Cat\'s name?');
cat.color = readlineSync.question('What color it?');
cat.weight = parseInt(readlineSync.question('How much it weight?'));

mouse.name = readlineSync.question('What is the Mouse\'s name?');
mouse.color = readlineSync.question('What color it?');
mouse.weight = parseInt(readlineSync.question('How much it weight?'));

console.log(cat);
console.log(mouse);
cat.eat(mouse);
console.log(cat);