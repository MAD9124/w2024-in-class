const walkService = require("../services/walk");

const errorHandler = (err) => {
  const [statusCode, message] = err.message?.split("|");
  const status = parseInt(statusCode);
  if (isNaN(status)) {
    console.log(err);
    return { status: 500, message: "Something went wrong" };
  }
  return { message, status };
};

const create = (req, res) => {
  try {
    const newWalk = walkService.create(req.body);
    res.status(201).json({
      data: newWalk,
    });
  } catch (err) {
    const { message, status } = errorHandler(err);
    res.status(status).json({
      error: { message },
    });
  }
};

const getAll = (_req, res) => {
  try {
    const walks = walkService.getAll();
    res.json({
      data: walks,
    });
  } catch (err) {
    const { message, status } = errorHandler(err);
    res.status(status).json({
      error: { message },
    });
  }
};

const getOne = (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const walk = walkService.getOne(id);
    res.json({
      data: walk,
    });
  } catch (err) {
    const { message, status } = errorHandler(err);
    res.status(status).json({
      error: { message },
    });
  }
};

const replace = (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const updatedWalk = walkService.replace(id, req.body);

    res.status(201).json({
      data: updatedWalk,
    });
  } catch (err) {
    const { message, status } = errorHandler(err);
    res.status(status).json({
      error: { message },
    });
  }
};

const update = (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const updatedWalk = walkService.update(id, req.body);

    res.status(201).json({
      data: updatedWalk,
    });
  } catch (err) {
    const { message, status } = errorHandler(err);
    res.status(status).json({
      error: { message },
    });
  }
};

const deleteOne = (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const deletedWalk = walkService.deleteOne(id);
    res.json({ data: deletedWalk });
  } catch (err) {
    const { message, status } = errorHandler(err);
    res.status(status).json({
      error: { message },
    });
  }
};

module.exports = { create, getAll, getOne, replace, update, deleteOne };
