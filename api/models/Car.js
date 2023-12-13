const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    carModel:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    productionDate: {
        type: String,
        required: true
    },
    engineType: {
        type: String,
        required: true
    },
    power: {
        type: String,
        required: true
    },
    euroStandard: {
        type: String,
        required: true
    },
    cubicCapacity: {
        type: String,
        required: true
    },
    gearbox:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    mileage: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;