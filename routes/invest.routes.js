module.exports = function(app){
 
    const invest = require('../controllers/invest.controller.js');
 
    // Create a new investment
    app.post('/api/invest', invest.create);
 
    // Retrieve all investment
    app.get('/api/invests', invest.findAll);
 
    // Retrieve a single investment by Id
    app.get('/api/invest/:investId', invest.findByPk);
 
    // Update a investment with Id
    app.put('/api/invest/:investId', invest.update);
 
    // Delete a investment with Id
    app.delete('/api/invest/:investId', invest.delete);

}