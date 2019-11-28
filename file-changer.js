"use strict";

const fs = require("fs");
const util = require("util");
const faker = require("faker");
const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);
const io = require("socket.io-client");
const socket = io.connect("http://localhost:3000");
setTimeout(function() {
  socket.close();
}, 2000);

module.exports = exports = {};

/**
 *
 * @param {json} file
 * @function readPromise
 */
exports.loadFile = async function(file) {
  return await readFromFile(file);
};

exports.saveFile = async file => {
  let data = faker.lorem.sentence();
  let text = data.toString().toUpperCase();
  await writeToFile(file, Buffer.from(text));
};

exports.alterFile = async file => {
  try {
    await exports.loadFile(file);
    await exports.saveFile(file);

    socket.emit("save", file);
  } catch (e) {
    socket.emit("err", e.toString());
  }
};
