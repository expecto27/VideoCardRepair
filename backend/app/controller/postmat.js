var globalFunctions = require('../config/global.fuctions');
var db = require('../config/db.config.js');

var Postamat = db.postamats;

exports.findAll = (req, res) => {
    Postamat.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};

exports.create = (req, res) => {
    Postamat.create({
        address: req.body.address,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};

exports.update = (req, res) => {
    Postamat.update({
        address: req.body.address,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        availability: req.body.availability,
        },
        {
            where: { id: req.params.id }
        }
    ).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};

exports.delete = (req, res) => {
    Postamat.destroy({
        where: { id: req.params.id }
    }).then(() => {
        globalFunctions.sendResult(res, 'Постамат удалён');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};

exports.findById = (req, res) => {
    Postamat.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};

exports.findByAddress = (req, res) => {
    Postamat.findAll({
        where: { address: req.params.address }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};

exports.findByCoordinates = (req, res) => {
    Postamat.findAll({
        where: {
            latitude: req.query.latitude,
            longitude: req.query.longitude
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};
