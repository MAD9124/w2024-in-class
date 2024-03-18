const assert = require("assert");
const axios = require("axios");

const goodResponse = (data, status) => {
  assert.strictEqual(status, 200, "Expected status 200");
  assert("data" in data, "Expected key of `data`");
};

const badRequestResponse = (data, status) => {
  assert.strictEqual(status, 400, "Expected status 400");
  assert("error" in data, "Expected key of `data`");
};

const notFoundResponse = (data, status) => {
  assert.strictEqual(status, 404, "Expected status 404");
  assert("error" in data, "Expected key of `data`");
};

const convertJSON = (d) => {
  // I am not going to be strict about timestamps for this assingment
  // Plus they make the tests more complicated
  const { updatedAt, createdAt, __v, ...converted } = JSON.parse(
    JSON.stringify(d),
  );
  return converted;
};

const PORT = process.env.PORT || 4000;
const requestFactory = (path) => async (method, url, body) => {
  try {
    const { data, status } = await axios.request({
      url: `http://localhost:${PORT}${path}${url}`,
      method,
      data: body,
    });

    // strip away the unwanted data
    if (data.data) {
      if (Array.isArray(data.data)) {
        data.data = data.data.map(convertJSON);
      } else {
        data.data = convertJSON(data.data);
      }
    }

    return { data, status };
  } catch (err) {
    if (err.response) {
      return {
        data: err.response.data,
        status: err.response.status,
      };
    }
  }
};

module.exports = {
  goodResponse,
  badRequestResponse,
  notFoundResponse,
  convertJSON,
  requestFactory,
};
