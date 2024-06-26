const Product = require("../models/product.model")

module.exports.createProduct = (req, res) => {
    // Mongoose's "create" method is run using our Product model to add a new product to our db's products collection.
    Product.create(req.body)   //This will use whatever the body of the client's request sends over
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.getAllProducts = (req, res) => {
    // Mongoose's "find" method is run using our Product model to get all products from our db's products collection.
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({_id:request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => console.log(err))
}