var globalFunctions = require('../config/global.fuctions');
var db = require('../config/db.config.js');

var Payment = db.payments;

exports.findAll = (req, res) => {
    db.sequelize.query(
        `SELECT * FROM payments`, { 
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
    Payment.create({
        request_id: req.body.request_id,
        amount: req.body.amount,
        status: req.body.status || 'pending', // по умолчанию статус 'pending'
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.update = (req, res) => {
    Payment.update({
        request_id: req.body.request_id,
        amount: req.body.amount,
        status: req.body.status,
        created_at: req.body.created_at || new Date() // или текущее время
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.delete = (req, res) => {
    Payment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        globalFunctions.sendResult(res, 'Запись удалена');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};

exports.findById = (req, res) => {
    Payment.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

exports.findByRequestId = (req, res) => {
    Payment.findAll({
        where: {
            request_id: req.params.request_id
        }
    })
    .then(objects => {
        globalFunctions.sendResult(res, objects);
    })
    .catch(err => {
        globalFunctions.sendError(res, err);
    })
};
