var db = require("../config/db.config");
var config = require("../config/auth.config");
var User = db.users;
var globalFunctions = require('../config/global.fuctions');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

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

const nodemailer = require("nodemailer");

// Функция для генерации кода
function generateCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Настройка почтового сервера
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "cybermaster.videocard@gmail.com", // Укажи свою почту
        pass: "vges rwom glqb givg" // Пароль от приложения (не основной пароль!)
    }
});

exports.register = async (req, res) => {
    try {
        const verificationCode = generateCode();

        const SQL = `INSERT INTO users (phone_number, name, email, password, isAdmin, verification_code, is_verified) 
                     VALUES('${req.body.phone}', '${req.body.name}', '${req.body.email}', 
                     '${bcrypt.hashSync(req.body.password, 10)}', 0, '${verificationCode}', 0)`;

        await db.sequelize.query(SQL, { type: db.sequelize.QueryTypes.INSERT });

        // Отправляем email с кодом
        await transporter.sendMail({
            from: '"GPU Repair" cybermaster.videocard@gmail.com',
            to: req.body.email,
            subject: "Подтверждение регистрации",
            text: `Ваш код подтверждения: ${verificationCode}`,
        });
       
        res.status(200).send({ message: "Пользователь зарегистрирован. Проверьте почту для подтверждения." });
    } catch (err) {
        res.status(500).send({ message: "Ошибка при регистрации." });
    }
};


exports.verifyCode = async (req, res) => {
    try {
        const { email, code } = req.body;
        
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).send({ message: "Пользователь не найден" });
        }
        if (user.verification_code !== code) {
            return res.status(400).send({ message: "Неверный код" });
        }

        await user.update({ is_verified: true, verification_code: null });
        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: "1h"
        });

        console.log("Токен при регистрации");
        console.log(token);
        var object = {
            id: user.id,
            name: user.name,
            isAdmin: user.isAdmin,
            accessToken: token
        };
        globalFunctions.sendResult(res, object);
    } catch (err) {
        res.status(500).send({ message: "Ошибка подтверждения." });
    }
};