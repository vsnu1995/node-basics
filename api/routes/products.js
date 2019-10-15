const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET request for products"
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: `GET request for product with id ${id}`
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "POST request for products"
    });
});

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: "PATCH request for products"
    });
});

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: `DELETE request for product ${id}`
    });
});

module.exports = router;