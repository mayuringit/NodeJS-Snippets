const EventEmitter = require('events');
// create class 
class MyEmitter extends EventEmitter{}
//init object
const myEmitter = new MyEmitter();
//event listener
myEmitter.on('event', ()=>console.log('Event Fired'))
myEmitter.on('noo', ()=>console.log('no Event Fired'))
//init event
//this will log myEmmitter
myEmitter.emit('event');
myEmitter.emit('noo');
myEmitter.emit('event');