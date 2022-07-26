const products = require('../controller/product.controller');
const router = require('express').Router();

router.get('/', products.findAll);

module.exports = router;