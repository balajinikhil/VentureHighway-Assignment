// unhandeled error handler
process.on("uncaughtException", (err) => {
  console.log(err.message);
  process.exit(1);
});

// config file setup
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

console.log(`NODE_ENV`, process.env.NODE_ENV);

const mongoose = require("mongoose");
const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connected");
  });

const app = require("./app");

const PORT = process.env.PORT || 1001;

const server = app.listen(PORT, () => {
  console.log(`Server up and running ${PORT}`);
});

// unhandeled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(err.message);
  server.close(() => {
    process.exit(1);
  });
});
