var globalFunctions = require('../config/global.fuctions');
var db = require('../config/db.config.js');
var User = db.users;
var Request = db.requests;

exports.findAll = (req, res) => {
    var SQL = `SELECT r.id, s.price as "price", g.name as "card", r.status, r.updated_at, s.title, r.created_at, r.postamat_drop_code, r.postamat_pickup_code, u.name, u.id as user_id FROM requests r JOIN gpus g ON r.gpu_id = g.id JOIN services s ON r.service_id = s.id JOIN postamats p ON p.id = r.postamat_id JOIN users u ON u.id = r.user_id`; 
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

const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        const dir = 'uploads/requests/';
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
      },
      filename: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        const filename = `request-${uuidv4()}${ext}`;
        cb(null, filename);
      }
    }),
    fileFilter: (req, file, cb) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Недопустимый тип файла. Разрешены только изображения (JPEG, PNG, GIF)'));
      }
    },
    limits: { 
      fileSize: 5 * 1024 * 1024 // 5MB
    }
  }).single('photo'); // Обрабатываем один файл с именем 'photo'
  
  exports.create = async (req, res) => {
    upload(req, res, async (err) => {
      try {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ 
            success: false,
            error: err.message 
          });
        } else if (err) {
          return res.status(500).json({ 
            success: false,
            error: err.message 
          });
        }
  
        const requiredFields = ['user_id', 'service_id', 'postamat_id', 'gpu_id'];
        for (const field of requiredFields) {
          if (!req.body[field]) {
            return res.status(400).json({
              success: false,
              error: `Не указано обязательное поле: ${field}`
            });
          }
        }
  
        // Проверка существования пользователя
        const user = await User.findOne({ where: { id: req.body.user_id } });
        if (!user) {
          return res.status(404).json({ 
            success: false,
            error: "Пользователь не найден." 
          });
        }
  
        const postamat_drop_code = generateCode();
  
        await transporter.sendMail({
          from: '"GPU Repair" cybermaster.videocard@gmail.com',
          to: user.email,
          subject: "Код для сдачи видеокарты",
          html: `
            <h2>Ваш код для работы с постаматом</h2>
            <p><strong>Код для сдачи видеокарты:</strong> ${postamat_drop_code}</p>
            <p>Спасибо за использование нашего сервиса!</p>
          `,
        });
  
        const request = await Request.create({
          user_id: req.body.user_id,
          service_id: req.body.service_id,
          postamat_id: req.body.postamat_id,
          gpu_id: req.body.gpu_id,
          status: "created",
          postamat_drop_code: postamat_drop_code,
          postamat_pickup_code: "0",
          photo_path: req.file ? req.file.path.replace(/\\/g, '/') : null
        });
  
        res.status(201).json({
          success: true,
          data: {
            request: request,
            photo_url: req.file ? `/uploads/requests/${path.basename(req.file.path)}` : null
          }
        });
  
      } catch (error) {
        console.error('Ошибка при создании заявки:', error);
        
        if (req.file && fs.existsSync(req.file.path)) {
          fs.unlinkSync(req.file.path);
        }
  
        res.status(500).json({
          success: false,
          error: 'Произошла ошибка при создании заявки',
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
      }
    });
  };
  exports.update = async (req, res) => {
    try {
        // 1. Валидация входных данных
        if (!req.params.id || !req.body.user_id) {
            return globalFunctions.sendError(res, new Error('Не указан ID запроса или user_id'));
        }

        // 2. Получаем данные пользователя
        const user = await User.findOne({ where: { id: req.body.user_id } });
        if (!user) {
            return globalFunctions.sendError(res, new Error('Пользователь не найден'));
        }

        let newCode = "0";
        if (req.body.status === "completed") {
            newCode = generateCode();
            console.log("отправка... " + user.email);

            await transporter.sendMail({
                from: '"GPU Repair" <cybermaster.videocard@gmail.com>',
                to: user.email,
                subject: "Код для получения видеокарты",
                html: `
                    <h2>Ваш код для работы с постаматом</h2>
                    <p><strong>Код для получения видеокарты:</strong> ${newCode}</p>
                    ${req.body.price ? `<p>Итоговая стоимость заказа: ${req.body.price} рублей</p>` : ''}
                    <p>Спасибо за использование нашего сервиса!</p>
                `,
            });
        }

        // 6. Обновление запроса
        const [updatedCount] = await Request.update({
            user_id: req.body.user_id,
            service_id: req.body.service_id,
            postamat_id: req.body.postamat_id,
            gpu_id: req.body.gpu_id,
            status: req.body.status,
            postamat_drop_code: req.body.postamat_drop_code,
            postamat_pickup_code: newCode
        }, {
            where: { id: req.params.id }
        });

        if (updatedCount === 0) {
            return globalFunctions.sendError(res, new Error('Запрос не найден'));
        }

        // 7. Отправка финального ответа
        globalFunctions.sendResult(res, {
            message: 'Запрос успешно обновлен',
            code: newCode,
            price: req.price
        });

    } catch (err) {
        console.error('Ошибка в update:', err);
        if (!res.headersSent) {
            globalFunctions.sendError(res, err);
        }
    }
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
    var SQL = `SELECT s.id as "service_id", s.price as "price", g.name as "card", r.status, r.updated_at, s.title, r.created_at, r.postamat_drop_code, r.postamat_pickup_code, r.photo_path FROM requests r JOIN gpus g ON r.gpu_id = g.id JOIN services s ON r.service_id = s.id JOIN postamats p ON p.id = r.postamat_id WHERE r.user_id = ` + req.params.user_id; 
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
