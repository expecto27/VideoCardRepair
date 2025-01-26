var globalFunctions = require('../config/global.fuctions');
var db = require('../config/db.config.js');

var Request = db.requests;

exports.findAll = (req, res) => {
    db.sequelize.query(
        `SELECT * FROM requests`, { 
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
    Request.create({
        user_id: req.body.user_id,
        service_id: req.body.service_id,
        postamat_id: req.body.postamat_id,
        gpu_id: req.body.gpu_id,
        status: req.body.status,
        postamat_drop_code: req.body.postamat_drop_code,
        postamat_pickup_code: req.body.postamat_pickup_code
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};

exports.update = (req, res) => {
    Request.update({
        user_id: req.body.user_id,
        service_id: req.body.service_id,
        postamat_id: req.body.postamat_id,
        gpu_id: req.body.gpu_id,
        status: req.body.status,
        postamat_drop_code: req.body.postamat_drop_code,
        postamat_pickup_code: req.body.postamat_pickup_code
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
    Request.destroy({
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
    Request.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};

exports.findByStatus = (req, res) => {
    Request.findAll({
        where: {
            status: req.params.status
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};

exports.findByUserId = (req, res) => {
    Request.findAll({
        where: {
            user_id: req.params.user_id
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};
