const express = require('express');
const router = express.Router();
const Thought = require('../models/Thoughts');
const { truncate } = require('fs/promises');

router.get('/thoughts', async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/thoughts/:id', async (req, res) => {
    try {
        const singleThought = await Thought.findById(req.params.id);
        if (!singleThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(singleThought);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.post('/thoughts', async (req, res) => {
    const thought = new Thought(req.body);
    try {
    const newThought = await thought.save();
    res.status(201).json(newThought)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/thoughts/:id', async (req, res) => {
    try {
    const updateThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updateThought) {
        return res.status(404).json({ message:'thought not found' });
    }
    res.json(updateThought);
    } catch (err) {
        res.status(400).json(err.message)
    }
});

router.delete('/thoughts/:id', async (req, res) => {
  try {
    const deleteThought = await Thought.findById(req.parans.id);
    if (!deleteThought) {
        return res.status(404).json({ message:'Thought not found'});
    }

    await deleteThought.remove();
    res.json({ message: ' Thought was deleted successfully' });
  } catch (err) {
    response.status(500).json({ message: err.message})
  }
});

module.exports = router;