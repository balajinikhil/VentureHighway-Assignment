module.exports = (err, req, res, next) => {
  res.status(500).json({
    status: "error",
    err,
    message: err.message,
  });
};
