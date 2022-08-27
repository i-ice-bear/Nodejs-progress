const fs = require("fs");
const eventManager = require("events");

const eventEmitter = new eventManager();

const eventFileFunction = async () => {
  const directoryLength = await fs.promises.readdir("../generated");
  const dataList = await {
    name: "Ben",
    role: "Ultimate alien",
    friend: "Kevin 11",
    watch: "Omnitrix",
  };
  eventEmitter.on("Generate-file", () => {
    fs.promises.writeFile(
      `../generated/report-${directoryLength.length + 1}.json`,
      JSON.stringify(dataList),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
          console.log("file generated successfully");
          fs.promises.writeFile(
            `../backup/cache-report-${directoryLength.length + 1}.json`,
            JSON.stringify(dataList),
            (err, data) => {
              if (err) {
                console.log(err);
              } else {
                console.log("Cache file generated successfully");
                setTimeout(() => {
                  fs.promises.writeFile(
                    `../generated/computations-${
                      directoryLength.length + 1
                    }.json`,
                    JSON.stringify(dataList),
                    (err, data) => {
                      if (err) {
                        console.log(err);
                      } else {
                        console.log(data);
                      }
                    }
                  );
                }, 5000);
              }
            }
          );
        }
      }
    );
  });
  eventEmitter.emit("Generate-file");
};
eventFileFunction();
