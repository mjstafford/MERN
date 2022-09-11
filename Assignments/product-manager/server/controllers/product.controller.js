const { Product } = require('../models/product.model')


module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.createProduct = (req, res) => {
    //per the model we will recieve the below input so we can destructure it
    const { title, price, description } = req.body

    //create is a built in method that comes with Mongoose via our Person model!
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.findProduct = (req, res) => {
    //find one id req.params (url)
    Product.findOne({ _id: req.params.id })
        .then(product => {

            console.log("in controller:");
            console.log(product);
            res.json(product)
        })
        .catch(err => res.json(err))
}