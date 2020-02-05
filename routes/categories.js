'use strict';

const express = require('express');
const router = express.Router();

const Category = require('../models/categories/categories-model.js');
const categories = new Category();


router.get('/', getCategories);
router.post('/', postCategories);
router.get('/:id', getCategories);
router.put('/:id', putCategories);
router.delete('/:id', deleteCategories);


function getCategories(req, res, next) {
    categories.get()
        .then(data => {
            const output = {
                count: data.length,
                results: data,
            };
            res.status(200).json(output);
        })
        .catch(next);
}

function getCategory(req, res, next) {
    categories.get(req.params.id)
        .then(result => res.status(200).json(result[0]))
        .catch(next);
}

function postCategories(req, res, next) {
    categories.create(req.body)
        .then(result => res.status(201).json(result))
        .catch(next);
}

function putCategories(req, res, next) {
    categories.update(req.params.id, request.body)
        .then(result => res.status(200).json(result))
        .catch(next);
}

function deleteCategories(req, res, next) {
    categories.delete(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(next);
}

module.exports = router;