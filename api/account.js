const router = require('express').Router();
const jwt = require('jwt-simple'); // для декодирования web-token'a
const config = require('../config');
const User = require('./models/user');

router.get('/account', (req, res, next) => {
    if (!req.headers['x-auth']) return res.sendStatus(401)
    try {
        const username = jwt.decode(req.headers['x-auth'], config.secretkey).username
    } catch(err) {
        return res.sendStatus(401)
    }
    User.findOne({username: username}, (err, user) => {
        if (err) return res.sendStatus(500);
        if (!user) return res.sendStatus(401);
        res.json(user);
    });
});

module.exports = router;