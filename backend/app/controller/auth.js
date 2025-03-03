var db = require("../config/db.config");
var config = require("../config/auth.config");
var User = db.users;
var globalFunctions = require('../config/global.fuctions');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.register = (req, res) => {
    var SQL = `INSERT INTO \`users\` (\`phone_number\`, \`name\`, \`email\`, \`password\`, \`isAdmin\`)  VALUES('${req.body.phone}', '${req.body.name}', '${req.body.email}', '${bcrypt.hashSync(req.body.password, 10)}', 0)`;
    console.log(SQL);
    db.sequelize.query(
        SQL, { 
                type: db.sequelize.QueryTypes.INSERT
        })
        .then(() => {
            var result = {
                message: "Пользователь зарегистрирован"
            };
            globalFunctions.sendResult(res, result);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};

exports.login = (req, res) => {
    console.log("findOne" + req.body.name);
    User.findOne({
        where: {
            name: req.body.name
        }
    })
        .then(user => {
            if (!user) {
                res.status(404).send({ message: "Неверно введенный логин и/или пароль" });
                return;
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                res.status(401).send({
                    accessToken: null,
                    message: "Неверно введенный логин и/или пароль"
                });
                return;
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: "1h" // 1 час — время действия токена
            });
            console.log("Токен при авторизации");
            console.log(token);
            var object = {
                id: user.id,
                name: user.name,
                isAdmin: user.isAdmin,
                accessToken: token
            };
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};

exports.refreshToken = (req, res) => {
    User.findOne({
        where: {
            name: req.body.name
        }
    })
        .then(user => {
            if (!user) {
                globalFunctions.sendError(res, "Неверно введенный логин и/или пароль");
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: "1h" // 1 час — время действия токена
            });
            console.log("Новый токен");
            console.log(token);
            var object = {
                id: user.id,
                name: user.name,
                isAdmin: user.isAdmin,
                accessToken: token
            };
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};

// проверка, что пользователь авторизован
exports.userBoard = (req, res) => {
    globalFunctions.sendResult(res, "Пользователь авторизован");
};