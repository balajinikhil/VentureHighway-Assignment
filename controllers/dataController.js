const Data = require("./../model/dataModel");

exports.getAllData = async (req, res, next) => {
  try {
    const data = await Data.find();

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.addData = async (req, res, next) => {
  try {
    const newEntry = await Data.create(req.body);

    res.status(201).json({
      status: "success",
      created: newEntry,
    });
  } catch (err) {
    next(err);
  }
};
