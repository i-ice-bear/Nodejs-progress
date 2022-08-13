const fs = require("fs");
const eventEmitter = require("node:events");
const eventEmit = new eventEmitter();

const fileGenerated = () => {
  eventEmit.on("connection", () => {
    fs.writeFile("../generated/generate.txt", "File generated", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File generated successfully");
        setTimeout(() => {
          fs.writeFile(
            "../backup/backup.txt",
            "Backup cache generated",
            (err, data) => {
              if (err) {
                throw err;
              } else {
                console.log("backup log generated successfully");
                console.log(data);
              }
            }
          );
        }, 3000);
        console.log(data);
      }
    });
  });
  eventEmit.emit("connection");
};

fileGenerated();
