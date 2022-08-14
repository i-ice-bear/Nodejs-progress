const carList = require("./lib/car.json");
const fs = require("fs");
const eventHost = require("events");

console.log(carList);

const eventManager = new eventHost();

async function generateData() {
  let dataForValue = await fs.promises.readdir("../generated");
  eventManager.on("Generate-data", () => {
    fs.promises.writeFile(
      `../generated/carlist-${dataForValue + 1}.txt`,
      JSON.stringify(carList),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File generated successfully");
          setTimeout(() => {
            fs.promises.writeFileSync(
              `../backup/carlist-backup-${dataForValue + 1}.txt`,
              JSON.stringify(carList),
              (err, data) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Backup file generated successfully! ");
                }
              }
            );
          }, 3000);
        }
      }
    );
  });
  eventManager.emit("Generate-data");
}

setTimeout(generateData, 1000);
