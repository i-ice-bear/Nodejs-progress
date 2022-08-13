const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const eventHandler = require("events");

const eventManager = new eventHandler();

app.get("/", (req, res) => {
  res.statusCode = 200;
  const data = fs.readFileSync("../html/index.html");
  res.send(data.toString());
  setTimeout((req, res) => {
    eventManager.on("cache-generate", (err, data) => {
      fs.writeFile(
        `../backup/backup-log${+1}.txt`,
        "document.cookie",
        (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Cookie log generated in backup directory.");
          }
        }
      );
    });
    eventManager.emit("cache-generate");
  }, 1000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
