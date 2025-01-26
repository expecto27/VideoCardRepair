module.exports = (app) => {

    const postamat = require('../controller/postmat');

    // Получение всех постаматов
    app.get('/api/postamats', postamat.findAll);

    // Создание нового постамата
    app.post('/api/addPostamat', postamat.create);

    // Обновление постамата по ID
    app.post('/api/updatePostamat/:id', postamat.update);

    // Удаление постамата по ID
    app.post('/api/deletePostamat/:id', postamat.delete);

    // Получение постамата по ID
    app.get('/api/postamat/:id', postamat.findById);

    // Поиск постаматов по адресу
    app.get('/api/postamats/address/:address', postamat.findByAddress);

    // Поиск постаматов по координатам (широта и долгота)
    app.get('/api/postamats/coordinates', postamat.findByCoordinates);
};
