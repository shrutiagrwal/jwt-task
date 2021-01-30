const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const User = require('../models/user')
const { JWTPrivateKey: private } = require('../config');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('login')
})
router.post('/', async(req, res) => {
    let UserName = req.body.username
    let Password = req.body.password
    if (UserName.length < 5)
        return res.status(400).send({ 'data': null, 'error': 'username invalid' });
    if (Password.length < 4)
        return res.status(400).send({ 'data': null, 'error': 'password invalid' });
    let user = await User.find({ UserName });
    if (!user || user.length === 0)
        return res.status(404).send({ 'data': null, 'error': `username doesn't exist` })
    let payload = { UserName }

    try {
        let accesstoken = jwt.sign(payload, private)
        res.status(201).append('Authorization', `Bearer ${accesstoken}`).send(`${user}`)
    } catch (err) {
        res.status(400).send('auth error')
    }
})
module.exports = router