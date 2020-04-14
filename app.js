const express = require("express");
const morgan = require("morgan");

const dataRoutes = require("./routes/dataRoutes");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/data", dataRoutes);

app.all("*", (req, res, next) => {
  next(new Error(`can't find ${req.originalUrl}`));
});

app.use(globalErrorHandler);
module.exports = app;
