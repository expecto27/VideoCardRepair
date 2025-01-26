module.exports = (app) => {

    const gpu = require('../controller/gpu');
    
    app.get('/api/gpus', gpu.findAll);
    app.post('/api/addGpu', gpu.create);
    app.post('/api/updateGpu/:id', gpu.update);
    app.post('/api/deleteGpu/:id', gpu.delete);
    app.get('/api/gpu/:id', gpu.findById);
    app.get('/api/gpu/name/:name', gpu.findByName);
};
