const users = require('../controller/user.controller');
const router = require('express').Router();

router.get('/', users.findAll);

module.exports = router;