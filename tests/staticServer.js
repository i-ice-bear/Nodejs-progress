const server = require("http");
const port = process.env.port || 3000;
const fs = require("fs");

  const createServer = server.createServer((req, res) => {
    res.statusCode = 200; //* ok
    res.setHeader("Content-type", "text/html");

    if (req.url == "/") {
      res.statusCode = 200; //* ok
      const htmlPage = fs.readFileSync("../html/static.html");
      res.end(htmlPage.toString());
    }
    if (req.url == "/") {
      res.statusCode = 200; //* ok
      const aboutPage = fs.readFileSync("../html/index.html");
      res.end(aboutPage.toString());
    }
  });

  createServer.listen(port, () => {
    console.log("Server is running on : ", port);
  });