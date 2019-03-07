const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET request for orders"
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: `GET request for orders ${id}`
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "POST request for orders"
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: "DELETE request for orders"
    });
});

module.exports = router;