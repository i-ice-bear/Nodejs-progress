const http = require("http");
const port = process.env.PORT || 3000;

const httpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end(`<h1>Server is running on port : ${port} </h1>`);
});

httpServer.listen(port, () => {
  console.log(`Server listen on port :`, port);
});
