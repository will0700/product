const productsController = require('../controllers/products')

module.exports = function(app){
    app.get('/api/products', productsController.index)
    app.post('/api/products', productsController.create)
    app.delete('/api/products/:id', productsController.delete)
    app.get('/api/products/:id', productsController.getOne)
    app.put('/api/products/:id', productsController.update)
}