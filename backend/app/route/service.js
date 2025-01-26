module.exports = (app) => {

    const service = require('../controller/service');
    
    app.get('/api/services', service.findAll);

    app.post('/api/addService', service.create);

    app.post('/api/updateService/:id', service.update);

    app.post('/api/deleteService/:id', service.delete);

    app.get('/api/service/:id', service.findById);

    app.get('/api/service/name/:name', service.findByName);
};
