module.exports = (app) => {

    const review = require('../controller/review');
    
    app.get('/api/reviews', review.findAll);  
    app.post('/api/addReview', review.create); 
    app.post('/api/updateReview/:id', review.update); 
    app.post('/api/deleteReview/:id', review.delete); 
    app.get('/api/review/:id', review.findById); 
};