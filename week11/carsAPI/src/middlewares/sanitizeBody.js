const xss = require("xss");
const debug = require("debug")("week11:middleware:sanitizeBody");

const stripTags = (payload) => {
  const attributes = {
    ...payload,
  };

  for (const key in attributes) {
    const value = attributes[key];
    if (typeof value === "object") {
      attributes[key] = stripTags(value);
    } else {
      attributes[key] = xss(attributes[key], {
        whiteList: [], // empty, means filter out all tags
        stripIgnoreTag: true, // filter out all HTML not in the whitelist
        stripIgnoreTagBody: ["script"],
        // the script tag is a special case, we need
        // to filter out its content
      });
    }
  }
  return attributes;
};

const sanitizeBody = (req, _res, next) => {
  debug(req.body);
  // sanitize the body
  const { id, _id, ...attributes } = req.body;

  req.sanitizedBody = stripTags(attributes);
  next();
};

module.exports = sanitizeBody;
