var globalFunctions = require('../config/global.fuctions');
var db = require('../config/db.config.js');

var Service = db.services;

exports.findAll = (req, res) => {
    db.sequelize.query(
        `SELECT * FROM services`, { // запрос SQL
            type: db.sequelize.QueryTypes.SELECT
        })
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};

exports.create = (req, res) => {
    Service.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        estimated_time: req.body.estimated_time
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};

exports.update = (req, res) => {
    Service.update({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        estimated_time: req.body.estimated_time
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
    });
};

exports.delete = (req, res) => {
    Service.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        globalFunctions.sendResult(res, 'Услуга удалена');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};

exports.findById = (req, res) => {
    Service.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};

exports.findByName = (req, res) => {
    Service.findAll({
        where: {
            name: req.params.name
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};
