const EventEmitter = require("events");

const app = new EventEmitter();

app.on("GET-request", (request) => {
  console.log(request.data);
});

app.on("POST-request", (request) => {
  console.log('post', request.data);
});

module.exports = app;