var globalFunctions = require('../config/global.fuctions');
var db = require('../config/db.config.js');

var GPU = db.gpus;

exports.findAll = (req, res) => {
    db.sequelize.query(
        `SELECT * FROM gpus`, { // запрос SQL
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
    GPU.create({
        name: req.body.name,
        brand: req.body.brand,
        model: req.body.model,
        memory_size: req.body.memory_size,
        chip_frequency: req.body.chip_frequency,
        release_year: req.body.release_year,
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.update = (req, res) => {
    GPU.update({
        name: req.body.name,
        brand: req.body.brand,
        model: req.body.model,
        memory_size: req.body.memory_size,
        chip_frequency: req.body.chip_frequency,
        release_year: req.body.release_year,
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
    GPU.destroy({
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
    GPU.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

exports.findByName = (req, res) => {
    GPU.findAll({
        where: {
            name: req.params.name
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};
