var db = require('../config/db.config.js');
var User = db.users;

// регистрация пользователя с предварительной проверкой существования логина и email
exports.checkDuplicateUsername = (req, res, next) => {
    // Проверка по номеру телефона
    User.findOne({
        where: {
            phone_number: req.body.phone
        }
    }).then(user => {
        if (user) {
            // Если пользователь найден и не верифицирован
            if (!user.isVerified) {
                // Удаляем старого пользователя
                user.destroy()
                    .then(() => {
                        // Добавляем нового пользователя
                        next();
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: "Ошибка при удалении пользователя: " + err.message
                        });
                    });
            } else {
                // Если пользователь найден и верифицирован
                res.status(400).send({
                    message: "Пользователь с данным номером телефона уже существует и верифицирован"
                });
            }
            return;
        }

        // Проверка по email
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                // Если пользователь найден и не верифицирован
                if (!user.isVerified) {
                    // Удаляем старого пользователя
                    user.destroy()
                        .then(() => {
                            // Добавляем нового пользователя
                            next();
                        })
                        .catch(err => {
                            res.status(500).send({
                                message: "Ошибка при удалении пользователя: " + err.message
                            });
                        });
                } else {
                    // Если пользователь найден и верифицирован
                    res.status(400).send({
                        message: "Пользователь с таким email уже существует и верифицирован"
                    });
                }
                return;
            }

            // если пользователя с переданным номером телефона и email не существует, то переходим к следующему этапу регистрации
            next();
        }).catch(err => {
            res.status(500).send({
                message: "Ошибка при проверке email: " + err.message
            });
        });
    }).catch(err => {
        res.status(500).send({
            message: "Ошибка при проверке номера телефона: " + err.message
        });
    });
};
