const Product = require('../models/product');

module.exports.getIndexProduct = (req, res) => {}

// Create Product
module.exports.postProduct = (req, res) => {
    let values = {
        name: req.body.name,
        price: req.body.price
    }

    Product
        .create(values)
        .then((product) => {
            res.json(product);
        }).catch((error) => {
            console.log(error);
        })
}

// Update Product
module.exports.putProduct = (req, res) => {
    let values = {
        name: req.body.name,
        price: req.body.price
    }

    let conditions = {
        where: {
            id: req.params.id
        }
    }

    Product
        .update(values, conditions)
        .then((product) => {
            res.json(product);
        })
        .catch((error) => {
            console.log(error);
        })
}
// Delete Product
module.exports.deleteProduct = (req, res) => {
    Product
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then((product) => {
            res.json(product);
        })
        .catch((error) => {
            console.log(error);
        })

}