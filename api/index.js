const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
const port = 5000;



app.use(express.urlencoded({extended: false}));
app.use(routes);


mongoose.connect('mongodb://127.0.0.1:27017/ivanchov_dealership');

app.listen(port, () => console.log('Server is running...' + port));