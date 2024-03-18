const { disconnect, dropDbs } = require("./db");

afterEach(async () => {
  await dropDbs();
});

after(() => {
  disconnect();
});
