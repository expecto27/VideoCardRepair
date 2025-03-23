var globalFunctions = require('../config/global.fuctions');
var db = require('../config/db.config.js');
var User = db.users;
var Request = db.requests;

exports.findAll = (req, res) => {
    var SQL = `SELECT r.id, g.name as "card", r.status, r.updatedAt, s.title, r.createdAt, r.postamat_drop_code, r.postamat_pickup_code, u.name, u.id as user_id FROM requests r JOIN gpus g ON r.gpu_id = g.id JOIN services s ON r.service_id = s.id JOIN postamats p ON p.id = r.postamat_id JOIN users u ON u.id = r.user_id`; 
    console.log(SQL);
    db.sequelize.query(
        SQL, { 
            type: db.sequelize.QueryTypes.SELECT
        })
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};


const generateCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); 
};

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "cybermaster.videocard@gmail.com",
        pass: "vges rwom glqb givg" 
    }
});

exports.create = async (req, res) => {

    try {
        const user = await User.findOne({ where: { id: req.body.user_id } });
        if (!user) {
            return res.status(404).send({ message: "Пользователь не найден." });
        }

        const postamat_drop_code = generateCode();

        await transporter.sendMail({
            from: '"GPU Repair" cybermaster.videocard@gmail.com',
            to: user.email, // Используем email пользователя
            subject: "Код для сдачи видеокарты",
            text: `Ваш код для сдачи видеокарты в постамат: ${postamat_drop_code}`,
        });

        const request = await Request.create({
            user_id: req.body.user_id,
            service_id: req.body.service_id,
            postamat_id: req.body.postamat_id,
            gpu_id: req.body.gpu_id,
            status: "created",
            postamat_drop_code: postamat_drop_code,
            postamat_pickup_code: "0",
        });

        globalFunctions.sendResult(res, request);
    } catch (err) {
        console.error(err);
        globalFunctions.sendError(res, err);
    }
};

exports.update = async (req, res) => {


    var newCode = "0"
    if(req.body.status == "completed"){
        newCode = generateCode()
    }
    console.log("Recipients: " + req.body.user_id);
    var user  = await User.findOne({where: { id: req.body.user_id}});
    console.log("Email: " + user.email);
    await transporter.sendMail({
        from: '"GPU Repair" cybermaster.videocard@gmail.com',
            to: user.email,
            subject: "Код для получения видеокарты",
            text: `Ваш код для получения видеокарты в постамата: ${newCode}` 
    })

    Request.update({
        user_id: req.body.user_id,
        service_id: req.body.service_id,
        postamat_id: req.body.postamat_id,
        gpu_id: req.body.gpu_id,
        status: req.body.status,
        postamat_drop_code: req.body.postamat_drop_code,
        postamat_pickup_code: newCode
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
    var SQL = `SELECT s.id as "service_id", g.name as "card", r.status, r.updatedAt, s.title, r.createdAt, r.postamat_drop_code, r.postamat_pickup_code FROM requests r JOIN gpus g ON r.gpu_id = g.id JOIN services s ON r.service_id = s.id JOIN postamats p ON p.id = r.postamat_id WHERE r.user_id = ` + req.params.user_id; 
    console.log(SQL);
    db.sequelize.query(
        SQL, { 
            type: db.sequelize.QueryTypes.SELECT
        })
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};
