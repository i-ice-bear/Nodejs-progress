const fs = require("fs");
const eventManager = require("events");
const eventEmitter = new eventManager();

const handler = async () => {
  const read_directory = fs.promises.readdir("../../generated");
  const url_to_fetch = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-07-28&sortBy=publishedAt&apiKey=cd6f44f57521402dab39db73fde51eb4"
  );

  eventEmitter.on("Generate-news-report", async (Stream) => {
    const generate_report = await fs.promises.writeFile(
      `../../generated/news-report-${(await read_directory).length + 1}.json`,
      JSON.stringify(url_to_fetch),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File generated successfully");
          setTimeout(async () => {
            const generate_cache = await fs.promises.writeFile(
              `../../backup/cache-report-${read_directory.length + 1}.json`,
              JSON.stringify(url_to_fetch),
              (err, data) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Cache generated successfully");
                }
              }
            );
          }, 8000);
        }
      }
    );
    console.log(generate_report);
    return console.log("File generated - successfully");
  });
  eventEmitter.emit("Generate-news-report");
};

handler();
