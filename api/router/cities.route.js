const router = require("express").Router();
const cityController = require("../controller/cities.controller");

router.route("/cities").get(cityController.getCities);

module.exports = router;
