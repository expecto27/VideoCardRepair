var globalFunctions = require('../config/global.fuctions');
var db = require('../config/db.config.js');

var Review = db.reviews; 

exports.findAll = (req, res) => {
    db.sequelize.query(
        `SELECT * FROM reviews`, { // запрос SQL
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
    Review.create({
        description: req.body.description,
        rating: req.body.rating,
        user_id: req.body.user_id, 
        service_id: req.body.service_id,
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.update = (req, res) => {
    Review.update({
        description: req.body.description,
        rating: req.body.rating,
        user_id: req.body.user_id,
        service_id: req.body.service_id,
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
    Review.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        globalFunctions.sendResult(res, 'Отзыв удален');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};

exports.findById = (req, res) => {
    Review.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};
