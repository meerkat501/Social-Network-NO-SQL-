const mongoose = require('mongoose');
const connectDB = require('../config');
const User = require('../models/User');
const Thought = require('../models/Thoughts');

const users= [
    {username: 'Jim', email: 'jim@gmail.com'},
    {username: 'Michael', email: 'michael@gmail.com'},
    {username: 'Dwight', email: 'dwight@gmail.com'},
    {username: 'Kevin', email: 'kevin@gmail.com'},
    {username: 'Pam', email: 'Pam@gmail.com'},
];

const thoughts = [
    { text: 'I love JavaScript', username: 'Jim'},
    { text: 'I love CSS', username: 'Pam'},
    { text: 'I love SQL', username: 'Michael'},
    { text: 'I love graphql', username: 'Dwight'},
    { text: 'I love REACT', username: 'Kevin'},
];

const seedDB = async () => {
    await connectDB();

    await User.deleteMany();
    await Thought.deleteMany();

    await User.insertMany(users);
    console.log('User data seeded!')

    await Thought.insertMany(thoughts);
    console.log('Thought data seeded!')
};

seedDB().catch(err => {
    console.log(err);
    mongoose.connection.close();
});