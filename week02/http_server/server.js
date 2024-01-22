const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    const data = { message: "Hello world from node.js" };
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ data }));
    res.end();
    return;
  }
  res.write("Hello from node");
  res.end();
});

server.listen(4000, () => {
  console.log("server running on 4000");
});
