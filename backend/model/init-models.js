var DataTypes = require("sequelize").DataTypes;
var _gpus = require("./gpus");
var _payments = require("./payments");
var _postamats = require("./postamats");
var _requests = require("./requests");
var _reviews = require("./reviews");
var _services = require("./services");
var _users = require("./users");

function initModels(sequelize) {
  var gpus = _gpus(sequelize, DataTypes);
  var payments = _payments(sequelize, DataTypes);
  var postamats = _postamats(sequelize, DataTypes);
  var requests = _requests(sequelize, DataTypes);
  var reviews = _reviews(sequelize, DataTypes);
  var services = _services(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  requests.belongsTo(gpus, { as: "gpu", foreignKey: "gpu_id"});
  gpus.hasMany(requests, { as: "requests", foreignKey: "gpu_id"});
  requests.belongsTo(postamats, { as: "postamat", foreignKey: "postamat_id"});
  postamats.hasMany(requests, { as: "requests", foreignKey: "postamat_id"});
  payments.belongsTo(requests, { as: "request", foreignKey: "request_id"});
  requests.hasMany(payments, { as: "payments", foreignKey: "request_id"});
  requests.belongsTo(services, { as: "service", foreignKey: "service_id"});
  services.hasMany(requests, { as: "requests", foreignKey: "service_id"});
  reviews.belongsTo(services, { as: "service", foreignKey: "service_id"});
  services.hasMany(reviews, { as: "reviews", foreignKey: "service_id"});
  requests.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(requests, { as: "requests", foreignKey: "user_id"});
  reviews.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(reviews, { as: "reviews", foreignKey: "user_id"});

  return {
    gpus,
    payments,
    postamats,
    requests,
    reviews,
    services,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
