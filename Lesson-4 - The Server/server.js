const http = require("http");
const { firstServe } = require("./modules/module");
console.log(http);
const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer(firstServe);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const { Buffer } = require("node:buffer");
