import * as fs from "fs";
import { cpus } from "node:os";
import cluster from "cluster";
import http from "node:http";
import process from "node:process";
const cpuNums = cpus().length;

async function handlerModel() {
  if (cluster.isPrimary) {
    const directoryLength = await fs.promises.readdir("sysinfo");
    console.log(`Process ${process.pid} running`);
    for (let index = 0; index < cpuNums; index++) {
      console.log(cpuNums);
      setTimeout(() => {
        cluster.fork();
      }, 2000);
      const processList = await cpus.toString()
      fs.promises.writeFile(
        `sysinfo/process-log-${directoryLength + 1}.json`,
        JSON.stringify(processList),
        (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Worker generated successfully");
          }
        }
      );
    }
    cluster.on("exit", (worker, code, signal) => {
      console.log(`process ${worker.process.pid} exited with code ${code}`);
    });
  } else {
    http
      .createServer((req, res) => {
        res.statusCode = 200;
        const htmlPage = fs.readFileSync("html/static.html");
        res.end(htmlPage.toString());
      })
      .listen(3000);
  }
}

handlerModel();
