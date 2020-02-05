'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const server = require('./lib/server.js');

const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

};
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

require('./lib/server.js').start(process.env.PORT);