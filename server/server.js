"use strict";

// const app = require("express")();
// const server = require("http").Server(app);
// const io = require("socket.io")(server);

// server.listen(3000);

const io = require("socket.io")(3000);

io.on("connect", () => {
  console.log("server.js connected");
});

io.on("connection", socket => {
  console.log(`Socket ${socket.id} is connected.`);

  socket.on("save", payload => {
    socket.broadcast.emit("save", payload);
  });

  socket.on("err", payload => {
    socket.broadcast.emit("err", payload);
  });
});
