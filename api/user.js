const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const User = require('./models/user');
const config = require('../config');

router.post('/user', (req, res, next) => {
    const user = new User;
    user.username = req.body.username;
    const password = req.body.password;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.sendStatus(500);
        user.password = hash;
        user.save((err) => {
           if (err) return res.sendStatus(500)
           return res.sendStatus(201);
        });
    });
});

router.get('/user', (req, res, next) => {
    if (!req.headers['x-auth']) return res.sendStatus(401);
    try {
        const auth = jwl.decode(req.headers['x-auth'], config.secretkey);
    } catch (err) {
        return res.sendStatus(401);
    }
    User.findOne({username: username}, (err, user) => {
        if (err) return res.sendStatus(500);
        res.json(user);
    });
});

module.exports = router;