var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var db = require('./app/config/db.config.js');

db.sequelize.sync({force: false}); 

app.listen(3000);

var user = require('./app/route/user');
user(app);
var request = require('./app/route/request.js');
request(app);
var postmat = require('./app/route/postmat.js');
postmat(app);
//var payments = require('./app/route/payment.js');
//payments(app);
var service = require('./app/route/service.js');
service(app);
var gpu = require('./app/route/gpu.js');
gpu(app);
var review = require('./app/route/review.js');
review(app);