const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("test", (name) => {
  console.log(name + " hello, world!");
});

// myEmitter.emit('test', 'tim')
// myEmitter.emit('test', 'luciano')
// myEmitter.emit('test', 'rikin')
// myEmitter.emit('test', 'shrenik')

exports.myEmitter = myEmitter;