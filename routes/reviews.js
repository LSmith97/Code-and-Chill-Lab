var express = require('express');
var router = express.Router();
var reviewsController = require('../controllers/reviews');

router.post('/games/:id/reviews',reviewsController.create)

module.exports = router;