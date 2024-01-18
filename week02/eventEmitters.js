const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event-name', (text) => {
    console.log('Hello, world ' + text)
});

myEmitter.emit('event-name', 'tim');
myEmitter.emit('event-name', 'bruna');