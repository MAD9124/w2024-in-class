const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/api") {
    const data = {
      message: "Hello from json nodejs",
    };
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ data }));
    res.end();
    return;
  }
  if (req.url === "/tim") {
    const data = {
      message: "tim is cool",
    };
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ data }));
    res.end();
    return;
  }
  res.write("Hello world from Node.js");
  res.end();
});

server.listen(4000, (err) => {
  if (err) {
    return console.log("error", err);
  }
  console.log("App listening on port 4000");
});
