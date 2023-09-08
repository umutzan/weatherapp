const express = require("express");

const getLocationMiddleware = require("../middlewares/getLocationMiddleware");
const getWeather = require("../middlewares/getWeatherData");
const dataEditorMiddleware = require("../middlewares/dataEditorMiddleware");

const pageController = require("../controllers/pageController");

const pageRouter = express.Router();

pageRouter.route("/").get(getLocationMiddleware, getWeather, dataEditorMiddleware, pageController.index);


module.exports = pageRouter;