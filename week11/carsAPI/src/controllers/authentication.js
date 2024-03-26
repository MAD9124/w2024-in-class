const authService = require("../services/authentication");

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.json({
      data: {
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};

const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const token = await authService.register(username, password);
    res.json({
      data: {
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  register,
};
