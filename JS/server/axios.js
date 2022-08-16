const axois = require("axios");
const eventEmitter = require("events");
const fs = require("fs");
const eventManager = new eventEmitter();

async function asyncFetch() {
  const preData = await fs.promises.readdir("../../generated");
  const url =
    "https://newsapi.org/v2/everything?q=tesla&from=2022-07-16&sortBy=publishedAt&apiKey=cd6f44f57521402dab39db73fde51eb4";
  await axois
    .get(url)
    .then((res) => {
      console.log(`Response ${res}`);
      console.log(res);
      eventManager.on("Generate-cache", () => {
        fs.promises.writeFile(
          `../../generated/${(preData, preData.length + 1)}.json`,
          JSON.stringify(url),
          (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log(`Response is : ${data}`);
            }
          }
        );
      });
    })
    .catch((err) => {
      console.log(err);
    });
  eventManager.emit("Generate-cache");
}
asyncFetch();
