const validateCar = (req, res, next) => {
  const { make, model, colour } = req.body;
  if (!make || !model || !colour) {
    res.status(400).json({
      error: {
        message: "Invalid car data",
      },
    });
    return;
  }
  
  next();
};

module.exports = validateCar;
