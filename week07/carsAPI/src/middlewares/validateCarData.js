const validateCarData = (req, res, next) => {
  const { make, model, colour } = req.body;

  if (make && model && colour) {
      // if all the fields are present, pass validation, move on to request handler
    next();
    return;
  }

  // if any are missing, respond early with 400
  res.status(400).json({
    error: {
      message: "Invalid car data",
    },
  });
};

module.exports = validateCarData;
