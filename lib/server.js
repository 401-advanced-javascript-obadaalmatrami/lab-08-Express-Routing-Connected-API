'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const categories = require('../routes/categories.js');
const products = require('../routes/products.js');

const app = express();

app.use(express.json())
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1/categories', categories);
app.use('/api/v1/products', products);

module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 8080;
        app.listen(PORT, () => console.log(`server up: ${PORT}`));
    }
}