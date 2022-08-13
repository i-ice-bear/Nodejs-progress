const http = require("http");
const port = process.env.PORT || 3000;
const fs = require("fs");

const httpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  if (req.url == "/") {
    res.statusCode = 200;
    const dataString = fs.readFileSync("../html/index.html");
    res.end(dataString.toString());
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>Page on | About</h1>");
  } else if (req.url == "/content-type") {
    res.statusCode = 200;
    res.end("<h1>Page on | content-type</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>Page on | Not - found | 404</h1>");
  }
});

httpServer.listen(port, () => {
  console.log(`Server listen on port :`, port);
});
