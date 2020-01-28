'use strict';

const express = require('express');
const router = express.Router();

const Product = require('../models/products/products-model.js');
const products = new Product();


router.get('/', getProducts);
router.post('/', postProducts);
router.get('/:id', getProducts);
router.put('/:id', putProducts);
router.delete('/:id', deleteProducts);

function getProducts(req, res, next) {
    products.get()
        .then(data => {
            const output = {
                count: data.length,
                results: data,
            };
            res.status(200).json(output);
        })
        .catch(next);
}

function postProducts(req, res, next) {
    products.create(req.body)
        .then(result => res.status(201).json(result))
        .catch(next);
}

function putProducts(req, res, next) {
    products.update(req.params.id, request.body)
        .then(result => res.status(200).json(result))
        .catch(next);
}

function deleteProducts(req, res, next) {
    products.delete(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(next);
}

module.exports = router;