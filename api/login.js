const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const config = require('../config');
const User = require('./models/user');

router.post('/login', (req, res, next) => {
    if (!req.body.username || !!req.body.password) return res.sendStatus(400);
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({username: username})
        .select('password')
        .exec((err, user) => {
           if (err) return res.sendStatus(500);
           if (!user) return res.sendStatus(401);
           bcrypt.compare(password, user.password, (err, valid) => {
              if (err) return res.sendStatus(500);
              if (!valid) return res.sendStatus(401);
              const token = jwt.encode({username: username}, config.secretkey);
              res.send(token);
           });
        });
});

module.exports = router;