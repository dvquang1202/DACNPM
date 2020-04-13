const express = require('express');
const userModel = require('../models/user.model');

const router = express.Router();

//sign up
router.post('/', async(req, res) => {
    const result = await userModel.add(req.body);

    const ret = {
        id: result.insertId,
        ...req.body
    }

    delete ret.password;
    res.status(201).json(ret);
})

module.exports = router;