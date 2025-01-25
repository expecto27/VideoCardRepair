var DataTypes = require("sequelize").DataTypes;
var _payments = require("./payments");
var _postamats = require("./postamats");
var _requests = require("./requests");
var _services = require("./services");
var _users = require("./users");

function initModels(sequelize) {
  var payments = _payments(sequelize, DataTypes);
  var postamats = _postamats(sequelize, DataTypes);
  var requests = _requests(sequelize, DataTypes);
  var services = _services(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  postamats.hasMany(requests, { as: "requests", foreignKey: "postamat_id", onDelete: "CASCADE"});
  requests.hasMany(payments, { as: "payments", foreignKey: "request_id", onDelete: "CASCADE"});
  services.hasMany(requests, { as: "requests", foreignKey: "service_id", onDelete: "CASCADE"});
  users.hasMany(requests, { as: "requests", foreignKey: "user_id"});
  requests.belongsTo(postamats, { as: "postamat", foreignKey: "postamat_id"});
  payments.belongsTo(requests, { as: "request", foreignKey: "request_id"});
  requests.belongsTo(services, { as: "service", foreignKey: "service_id"});
  requests.belongsTo(users, { as: "user", foreignKey: "user_id"});

  return {
    payments,
    postamats,
    requests,
    services,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
