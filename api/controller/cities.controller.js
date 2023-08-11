const httpStatus = require("http-status");
const cities = require("../cities.json");

const getCities = async (req, res) => {
  return res.status(httpStatus.OK).json({
    ...cities,
  });
};

module.exports = {
  getCities,
};
