const { isValidObjectId: mongooseValidObjectId } = require("mongoose");

const isValidObjectId = (req, res, next) => {
  const { id } = req.params;
  if (!mongooseValidObjectId(id)) {
    // return bad request
    res.status(400).json({
      error: {
        message: `Id ${id} is not a valid object id`,
      },
    });
    return;
  }
  next();
};

module.exports = isValidObjectId;
