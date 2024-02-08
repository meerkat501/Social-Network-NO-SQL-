const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/users',async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post('/users', async (req, res) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
});

router.put('/users/:id', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
});

module.exports = router;