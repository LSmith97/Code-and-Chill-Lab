var express = require('express');
var router = express.Router();
var gamesController = require('../controllers/games')

/* GET users listing. */
router.get('/', gamesController.index);
router.get('/new', gamesController.new);

router.post('/', gamesController.create);

module.exports = router;
