'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

// Listen for a 'connect' event, and call the anon function specified
socket.on('connect', () => {
  console.log('Logger.js >> connected!');
});

socket.on('close', () => {
  console.log('Logger.js closing!');
});

// Listen for the 'data' event, and call the anon function specified
socket.on('save', payload => {
  console.log(`File ${payload.toString()} changed successfully`);
});

// Listen for 'err' event, and call anon function specified
socket.on('err', payload => {
  console.log(`File change error ${payload}`);
});
