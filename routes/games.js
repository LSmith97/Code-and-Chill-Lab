var express = require('express');
var router = express.Router();
var gamesController = require('../controllers/games');


/* GET users listing. */
router.delete("/:id", gamesController.delete);

router.get('/', gamesController.index);
router.get('/new', gamesController.new);
router.get('/:id',gamesController.show);

router.post('/', gamesController.create);



module.exports = router;
