const recomendations = require('../controller/recomendation.controller');
const router = require('express').Router();

router.get('/', recomendations.findAll);

module.exports = router;