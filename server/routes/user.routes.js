const express = require('express')
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        return res.status(200).json({message: 'Hello!'})
    })

router
    .route('/login')
    .post()

router
    .route('/logout')
    .get()

router
    .route('/register')
    .post()

module.exports = router