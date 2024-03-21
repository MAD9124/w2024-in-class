const xss = require("xss");
const debug = require("debug")("week11:middleware:sanitizeBody");

const sanitizeBody = (req, _res, next) => {
  debug(req.body);
  // sanitize the body
  const { id, _id, ...attributes } = req.body;

  for (const key in attributes) {
    attributes[key] = xss(attributes[key], {
      whiteList: [], // empty, means filter out all tags
      stripIgnoreTag: true, // filter out all HTML not in the whitelist
      stripIgnoreTagBody: ["script"],
      // the script tag is a special case, we need
      // to filter out its content
    });
  }
  debug(attributes);
  req.sanitizedBody = attributes;
  next();
};

module.exports = sanitizeBody;
