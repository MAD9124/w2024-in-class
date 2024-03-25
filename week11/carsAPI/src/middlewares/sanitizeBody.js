const xss = require("xss");
const debug = require("debug")("week11:middleware:sanitizeBody");

const sanitize = (value) =>
  xss(value, {
    whiteList: [], // empty, means filter out all tags
    stripIgnoreTag: true, // filter out all HTML not in the whitelist
    stripIgnoreTagBody: ["script"],
    // the script tag is a special case, we need
    // to filter out its content
  });

const stripTags = (payload) => {
  const attributes = {
    ...payload,
  };

  for (const key in attributes) {
    const value = attributes[key];
    if (Array.isArray(value)) {
      attributes[key] = value.map((v) =>
        // this will include arrays as well
        typeof v === "object" ? stripTags(v) : sanitize(v)
      );
      // ternary operator above, same as below
      // if (typeof v === 'object') {
      //   return stripTags(v)
      // } else {
      //   xss(...)
      // }
    } else if (typeof value === "object") {
      attributes[key] = stripTags(value);
    } else {
      attributes[key] = sanitize(value);
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
