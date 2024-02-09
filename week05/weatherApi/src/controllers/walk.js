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

const create = async (req, res) => {
  try {
    const newWalk = await walkService.create(req.body);
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

const replace = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const updatedWalk = await walkService.replace(id, req.body);

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

const update = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const updatedWalk = await walkService.update(id, req.body);

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
