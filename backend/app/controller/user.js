var globalFunctions = require('../config/global.fuctions');
var db = require('../config/db.config.js');

var User = db.users;

exports.findAll = (req, res) => {
    db.sequelize.query(
        `SELECT * FROM users`, { // запрос SQL
            type: db.sequelize.QueryTypes.SELECT
        })
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};


exports.create = (req, res) => {
    User.create({
        name: req.body.name,
        password: req.body.password,
        phone_number: req.body.phone_number,
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.update = (req, res) => {
    User.update({
        name: req.body.name,
        password: req.body.password,
        phone_number: req.body.phone_number,
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.delete = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        globalFunctions.sendResult(res, 'Запись удалена');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};

exports.findById = (req, res) => {
    User.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

exports.findByUsername = (req, res) => {
    User.findAll({
        where: {
            name: req.params.name
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};