const express = require('express');
const router = express.Router()

const ProductController = require('../src/app/controllers/product/ProductController')

router.post('/api/product', ProductController.post)

module.exports = router;
