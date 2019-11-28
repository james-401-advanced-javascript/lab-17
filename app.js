'use strict';

const fileChanger = require('./file-changer');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

// Listen for a 'connect' event, and call the anon function specified
socket.on('connect', () => {
  console.log('App.js >> connected!');
});

/*
To start with, you should find that the app.js file has some existing content. This code will read the contents of the specified file from the command line arguments, and convert the contents of the file into uppercase letters. Instead of converting the content to uppercase, use the module faker to generate a fake “lorem ipsum” sentence and replace the contents of the file with this new sentence.
*/

socket.on('close', () => {
  console.log('Closing app.js');
});

setTimeout(function() {
  socket.close();
}, 2000);

let file = process.argv.slice(2).shift();

fileChanger.alterFile(file);
