const http = require("http");
const port = process.env.PORT || 3000;
const fs = require("fs");
const httpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  if (req.url == "/") {
    const staticPath = fs.readFileSync("../../html/static.html");
    res.end(staticPath.toString());
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end(
      "About page is currently in development! Wait for 5 Century until it's done"
    );
  } else if (req.url == "/contact") {
    res.statusCode = 200;
    res.end("We live on mars you can't able to contact with us!");
  } else {
    res.statusCode = 404;
    res.end("We didn't exist like pluto! Understood ");
  }
});

httpServer.listen(port, () => {
  console.log(`Server is listening on port :`, port);
});
