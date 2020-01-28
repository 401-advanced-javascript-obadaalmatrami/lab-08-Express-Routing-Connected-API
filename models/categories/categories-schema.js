  'use strict';

  const mongoose = require('mongoose');

  const categories = mongoose.Schema({
      name: { type: String, required: true },
      description: { type: Number, required: true },
      type: { type: String, uppercase: true, enum: ['Shoes', 'T-Shirt', 'Jeans'] }
  });

  module.exports = mongoose.model('categories', categories);