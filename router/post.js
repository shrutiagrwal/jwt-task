const express = require('express');
const auth = require('../auth/userAuth');
const router = express.Router();


router.get('/', auth, async(req, res) => {
    res.send(req.user)
})
module.exports = router