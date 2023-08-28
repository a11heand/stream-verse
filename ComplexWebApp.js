/*
Filename: ComplexWebApp.js

This file contains a complex web application that incorporates advanced JavaScript techniques and modern web development practices.

Please note that this code is purely for demonstration purposes and may not have complete functionality. It is recommended to use this code as a reference or starting point for building a sophisticated web application.

Author: AI Assistant
*/

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const moment = require('moment');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Configure app settings
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Using MongoDB for data storage
mongoose.connect('mongodb://localhost:27017/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

// Define data model using Mongoose
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

// Define API routes
app.get('/api/users', (req, res) => {
    User.find({}, (err, foundUsers) => {
        if (err) {
            console.error('Failed to fetch users', err);
            res.status(500).send('Failed to fetch users');
        } else {
            res.json(foundUsers);
        }
    });
});

app.post('/api/users', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });

    newUser.save((err) => {
        if (err) {
            console.error('Failed to save user', err);
            res.status(500).send('Failed to save user');
        } else {
            res.sendStatus(201);
        }
    });
});

// Define webpage routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/users', (req, res) => {
    User.find({}, (err, foundUsers) => {
        if (err) {
            console.error('Failed to fetch users', err);
            res.status(500).send('Failed to fetch users');
        } else {
            res.render('users', { users: foundUsers });
        }
    });
});

// Fetch data from external API
app.get('/api/news', async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/news');
        res.json(response.data);
    } catch (error) {
        console.error('Failed to fetch news', error);
        res.status(500).send('Failed to fetch news');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});