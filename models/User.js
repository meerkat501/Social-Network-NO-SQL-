const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: String,
    email: String,
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought'}],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const User = model('User', UserSchema);

module.exports = User;