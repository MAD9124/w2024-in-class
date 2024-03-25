const debug = require("debug")("week11:middleware:sanitizeBody");
const xss = require("xss");

const sanitize = (str) =>
  xss(str, {
    whiteList: {}, // empty, means filter out all tags
    stripIgnoreTag: true, // filter out all HTML not in the whitelist
    stripIgnoreTagBody: ["script"],
    // the script tag is a special case, we need
    // to filter out its content
  });

const stripTags = (payload) => {
  const { ...attributes } = payload;

  debug(payload);

  for (const key in attributes) {
    const value = attributes[key];
    if (Array.isArray(value)) {
      attributes[key] = value.map((v) =>
        typeof v === "object" ? stripTags(v) : sanitize(v)
      );
    } else if (typeof value === "object") {
      attributes[key] = stripTags(value);
    } else {
      attributes[key] = sanitize(value);
    }
  }

  return attributes;
};

const sanitizeBody = (req, res, next) => {
  //   debug(req.body);
  const { id, _id, ...attributes } = req.body;

  req.sanitizedBody = stripTags(attributes);

  next();
};

module.exports = sanitizeBody;
