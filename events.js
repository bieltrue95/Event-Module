// const { EventEmitter } = require("events");
// const ev = new EventEmitter();

// //ev.once ira realizar o evento somente uma vez.
// ev.on("saySomething", (message) => {
//   console.log("Eu ouvi você:", message);
// });
// ev.emit('saySomething',"Gabriel");
// ev.emit('saySomething',"Thais");
// ev.emit('saySomething',"Camila");

// Herança
const { inherits } = require('util');
const { EventEmitter } = require('events');

function Character(name) {
  this.name = name;
}
inherits(Character, EventEmitter);
const chapolin = new Character('Chapolin');
chapolin.on("help", () => console.log(`Eu o ${chapolin.name} colorado!`));
console.log("Oh! E agora, quem poderá nos defender ?");
chapolin.emit("help");

