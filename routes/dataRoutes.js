const Router = require("express").Router();
const dataController = require("./../controllers/dataController");

Router.route("/").get(dataController.getAllData).post(dataController.addData);

module.exports = Router;
