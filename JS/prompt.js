const prompt = require("prompt");
const fs = require("fs");
prompt.start();

async function addLocation() {
  await prompt.get(["Add your file location"], (err, data) => {
    console.log(data);
  });
}
addLocation();
