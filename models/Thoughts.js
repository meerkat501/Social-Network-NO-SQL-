const { Schema, model } = require('mongoose')

const ThoughtSchema = new Schema({
    text: String,
    createdAt: { 
        type: Date,
        default: Date.now
    },
    username: String,
    reactions: [{
        body: String,
        username: String,
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;