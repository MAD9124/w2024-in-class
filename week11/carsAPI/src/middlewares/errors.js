const { MongooseError } = require("mongoose");
const debug = require("debug")("week11:errorHandler");

class ApiError extends Error {
  statusCode = 500;
}

class BadRequestError extends ApiError {
  statusCode = 400;
}

class UnauthenticatedError extends ApiError {
  statusCode = 401;
}

class ForbiddenError extends ApiError {
  statusCode = 403;
}

class NotFoundError extends ApiError {
  statusCode = 404;
}

const errorHandler = (error, req, res, next) => {
  debug("err", error);

  if (error instanceof MongooseError && error.name === "ValidationError") {
    res.status(400).json({
      error: {
        message: error.message,
      },
    });
    return;
  }

  if (error instanceof ApiError) {
    res.status(error.statusCode).json({
      error: {
        message: error.message,
      },
    });
    return;
  }
  res.status(500).json({
    error: {
      message: "Something went wrong",
    },
  });
};

module.exports = {
  ApiError,
  BadRequestError,
  UnauthenticatedError,
  ForbiddenError,
  NotFoundError,
  errorHandler,
};
