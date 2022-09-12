import * as fs from "fs";
import cluster from "cluster";
import process from "process";
import { cpus } from "os";
import http from "node:http";
import axios from "axios";
import { getEnabledCategories } from "trace_events";

const cpusLength = new cpus().length;
const sampleUrl =
  "https://newsapi.org/v2/everything?q=tesla&from=2022-08-12&sortBy=publishedAt&apiKey=cd6f44f57521402dab39db73fde51eb4";

async function handler(req, res, next) {
  if (cluster.isPrimary) {
    console.log(`Process ${process.pid} is running `);
    for (let cpuAllocation = 0; cpuAllocation < cpusLength; cpuAllocation++) {
      let content;
      content = cpusLength;
      console.log(content);
      async function forkCluster() {
        await cluster.fork();
        const container_length = await fs.promises.readdir("sysinfo");
        await fs.promises.writeFile(
          `sysinfo/process-${process.pid}-${container_length + 1}.json`,
          JSON.stringify(process),
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log(`Cluster : ${cluster} forked`);
            }
          }
        );
      }
      forkCluster();
    }
    async function extiCluster() {
      await cluster.on("Exit from cluster", (worker, code, signal) => {
        console.log(
          `command failed with exit code ${worker.process.pid} Worker : ${worker} | Signal : ${signal} | Code : ${code}`
        );
      });
    }
    extiCluster();
  } else {
    async function createServer() {
      await http
        .createServer((req, res) => {
          res.statusCode = 200;
          const webString = (fs.readFileSync("html/static.html"));
          res.end(webString.toString());
        })
        .listen(3000);
    }
    createServer();
  }
}

handler();
