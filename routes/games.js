var express = require('express');
var router = express.Router();
var gamesController = require('../controllers/games')

/* GET users listing. */
router.get('/', gamesController.index);

module.exports = router;
