const Car = require('../models/Car');

exports.getAll = () => {
    try {
        return Car.find({});
    } catch (err) {
        return err.message;
    }
};

exports.getOne = (carId) => {
    try {
        return Car.findById(carId);
    } catch (err) {
        return err.message;
    }
};