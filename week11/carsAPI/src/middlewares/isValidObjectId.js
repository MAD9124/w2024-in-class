const { isValidObjectId: validObjectId } = require("mongoose");

const isValidObjectId = (req, res, next) => {
    console.log(req.params)
  const { id } = req.params;
  if (validObjectId(id)) {
    next();
    return;
  }
  res.status(400).json({
    error: {
      message: `Id ${id} is not a valid Object Id`,
    },
  });
};

module.exports = isValidObjectId;
