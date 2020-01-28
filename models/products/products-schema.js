  'use strict';

  const mongoose = require('mongoose');

  const product = mongoose.Schema({
      name: { type: String, required: true },
      description: { type: String },
      price: { type: Number, required: true },
      category: { type: String, required: true },
  });


  module.exports = mongoose.model('product', product);