const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    index(req, res){
        Product.find()
        .then(products => res.json({products}))
        .catch(console.log)
    },

    getOne(req, res){
        Product.findById(req.params.id)
        .then(product => res.json({product}))
        .catch(err => res.json({errors: err}))
    },

    create(req, res){
        Product.create(req.body)
        .then(product => res.json({product}))
        .catch(err => {
            let errors = []
            for(key in err.errors){
                errors.push(err.errors[key].message)
            }
            res.json({errors})
    })
    },

    delete(req, res){
        Product.findByIdAndDelete(req.params.id)
        .then(() => res.json({status: "success"}))
        .catch(err => res.json({errors: err}))
    },

    update(req, res){
        Product.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {
                new: true,
                runValidators: true,
            }
        )
        .then(product => res.json({product}))
        .catch(err => {
            let errors = []
            for(key in err.errors){
                errors.push(err.errors[key].message)
            }
            res.json({errors})
    })}
}