const router = require('express').Router();

const carController = require('./controllers/carController');

router.use('/cars', carController);

module.exports = router;