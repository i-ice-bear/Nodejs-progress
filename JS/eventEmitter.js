const myEmitter = require("node:events");

const eventEmitter = new myEmitter();

eventEmitter.on("Scream", () => {
  console.log("I heared a scream");
  const count = 5;
  console.log("count: %d", count);
});

eventEmitter.emit("Scream");
