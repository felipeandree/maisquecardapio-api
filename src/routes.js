const express = require('express');
const router = express.Router()

const ProductController = require('../src/app/controllers/product/ProductController')

router.get('/api/products', ProductController.get)

router.post('/api/product', ProductController.post)

router.delete('/api/product/:id', ProductController.delete)

module.exports = router;
