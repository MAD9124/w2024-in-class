const app = require("./server");

app.emit("POST-request", {
  url: "https://google.ca",
  data: {
    some: "json",
    data: "nice",
  },
});
