const router = require('express').Router();

const carService = require('../services/carService');

router.get('/', async (req, res) => {
    try {
        const cars = await carService.getAll();

        return res.json({data: cars, message: "Sucessfully get all cars!"});
    } catch (err) {
        return err.message;
    }
});

router.get('/:id', async (req, res) => {
    try {
        const car = await carService.getOne(req.params.id);

        return res.json({data: car, message: "Sucessfully get one car!"});
    } catch (err) {
        return err.message;
    }
});

module.exports = router;