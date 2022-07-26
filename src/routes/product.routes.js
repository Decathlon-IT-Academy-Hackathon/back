const products = require('../controller/product.controller');
const router = require('express').Router();

router.get('/', products.findAll);
/* router.post('/', users.create);
router.get('/:id', users.findOne);
router.put('/', users.update);
router.delete('/:id', users.delete); */

module.exports = router;