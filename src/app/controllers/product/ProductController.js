const ProductModel = require('../../models/ProductModel');

exports.post = (req, res, next) => {
    try {
        console.log(req.body)
    } catch (err) {
        console.log(err)
    }
    res.status(200).send("OK")
}

