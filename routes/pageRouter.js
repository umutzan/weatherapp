const express = require("express");

const getLocationMiddleware = require("../middlewares/getLocationMiddleware");

const weatherController = require("../controllers/weatherController");
const pageController = require("../controllers/pageController");

const pageRouter = express.Router();

pageRouter.route("/").get(getLocationMiddleware, weatherController.getWeather, pageController.index);


module.exports = pageRouter;