module.exports = (app) => {

    const request = require('../controller/request');

    app.get('/api/requests', request.findAll);

    app.post('/api/addRequest', request.create);

    app.post('/api/updateRequest/:id', request.update);

    app.post('/api/deleteRequest/:id', request.delete);

    app.get('/api/request/:id', request.findById);

    app.get('/api/requests/status/:status', request.findByStatus);

    app.get('/api/requests/user/:user_id', request.findByUserId);
};
