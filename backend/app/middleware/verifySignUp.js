var db = require('../config/db.config.js');
var User = db.users;
// регистрация пользователя с предварительной проверкой существования логина
exports.checkDuplicateUsername = (req, res, next) => {
    User.findOne({
        where: {
            phone_number: req.body.phone
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Пользователь с данным номером телефона существует"
            });
            return;
        }
        // если пользователя с переданным логином не существует, то переходим к следующему этапу регистрации
        next();
    });
};