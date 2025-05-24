var globalFunctions = require('../config/global.fuctions');
var db = require('../config/db.config.js');

var Review = db.reviews; 

exports.findAll = (req, res) => {
    db.sequelize.query(
        `SELECT * FROM reviews r JOIN users u ON r.user_id = u.id JOIN services s ON s.id = r.service_id`, {
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
    const { description, rating, user_id, service_id } = req.body;

    const query = `
        INSERT INTO reviews (opinion, rating, user_id, service_id)
        VALUES (:description, :rating, :user_id, :service_id);
    `;

    db.sequelize.query(query, {
        replacements: { description, rating, user_id, service_id },
        type: db.sequelize.QueryTypes.INSERT
    })
    .then(([result]) => {
        // Если нужно вернуть результат вставки (например, ID вставленной записи)
        res.status(201).json({ message: 'Review created successfully', result });
    })
    .catch(err => {
        console.error('Error creating review:', err);
        res.status(500).json({ message: 'Error creating review', error: err });
    });
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

exports.findByServiceId = (req, res) => {
    db.sequelize.query(
        `SELECT * FROM reviews r WHERE r.service_id =` + req.params.id, {
            type: db.sequelize.QueryTypes.SELECT
        })
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
}

exports.findByUserId = (req, res) => {
    db.sequelize.query(
        `SELECT * FROM reviews r WHERE r.user_id =` + req.params.id, {
            type: db.sequelize.QueryTypes.SELECT
        })
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
}