const { BadRequestError } = require("./errors");

const validateCar = (req, res, next) => {
  const { make, model, colour } = req.body;
  if (!make || !model || !colour) {
    throw new BadRequestError("Invalid car data");
  }

  next();
};

module.exports = validateCar;
