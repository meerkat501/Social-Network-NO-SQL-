const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Thought = require('../models/Thoughts');

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

router.get('/users/:id', async (req, res) => {
   const user = await User.findById(req.params.id)
   res.json(user);
});

router.post('/users/:userId/friends/:friendId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found'})
        }
        const friend = await User.findById(req.params.friendId)
        if (!friend) {
            return res.status(404).json({ message: 'Friend not found'})
        }
        if (user.friends.includes(req.params.friendId)){
            return res.status(400).json({ message: 'User has this friend!'})
        }

        user.friends.push(req.params.friendId);
        await user.save();

        res.json({ message: 'Friend has been added successfully!'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

router.delete('/users/:userId/friends/:friendId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message:'User not found!' });
        }
        const friendIndex = user.friends.indexOf(req.params.friendId);
        if (friendIndex === -1) {
            return res.status(404).json({ message: 'Friend not found in user\'s friend list' })
        }
        user.friends.splice(friendIndex, 1);
        await user.save();

        res.json({ message: 'Friend was removed successfully!', user });
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
});

router.delete('/users/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User was not found'});
        }

        await Thought.deleteMany({ username: user.username});

        await User.updateMany({}, {$pull: { friends: req.params.userId}});

        await User.findByIdAndDelete(req.params.userId);

        res.json({ message: 'User was successfully deleted!'});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

module.exports = router;