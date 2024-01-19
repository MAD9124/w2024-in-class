const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
  response.write("Hello world from Node.js");
  response.end();
});

server.listen(4000, (err) => {
  if (err) {
    return console.log("error", err);
  }
  console.log("App listening on port 4000");
});
