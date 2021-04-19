var DataTypes = require("sequelize").DataTypes;
var _UserInfo = require("./UserInfo");

function initModels(sequelize) {
  var UserInfo = _UserInfo(sequelize, DataTypes);


  return {
    UserInfo,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
