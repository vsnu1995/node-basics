const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET request for products"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "POST request for products"
    });
});

router.put('/', (req, res, next) => {
    res.status(200).json({
        message: "PUT request for products"
    });
});

module.exports = router;