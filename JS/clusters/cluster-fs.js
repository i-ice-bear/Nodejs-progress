const cluster = require("cluster");
const numCPUs = require("node:os").cpus().length;
const http = require("http");
const process = require("process");
const fs = require("fs");
const eventCommitter = require("events");

const eventEmitter = new eventCommitter();

if (cluster.isPrimary) {
  console.log(`Process ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    //+ cluster for-each loop
    const element = numCPUs;
    console.log(element);
    cluster.fork();
    eventEmitter.on("Process-Working", (stream) => {
      const generateFiles = async (path, process) => {
        const directory_interruptions = await fs.promises.readdir("sysinfo");
        console.log(directory_interruptions.length);
        const sysInfo = "System configuration will go here"
        let genrate_log;
        genrate_log = await fs.promises.writeFile(
          `sysinfo/process-pwd-${directory_interruptions.length + 1}.txt`,
          sysInfo,
          (err, data) => {
            if (err) {
              console.log(err);
              console.log("Sysinfo log failed");
            } else {
              console.log("Sysinfo generated");
            }
          }
        );
      };
      generateFiles();
    });
    setTimeout(() => {
      eventEmitter.emit("Process-Working");
    }, 3000);
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Process ${worker.process.pid} is died with exit code 1`);
  });
} else {
  http
    .createServer((req, res) => {
      res.statusCode = 200;
      res.end("<h1>Hello from cluster node</h1>");
    })
    .listen(8000);
  console.log(`Worker ${process.pid} is running properly`);
}
