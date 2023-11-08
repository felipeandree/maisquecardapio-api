const mongoose = require('../database');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
});

const product = mongoose.model('product', ProductSchema);

module.exports = product; 