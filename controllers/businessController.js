const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;

router.get('/business', isAuthenticated, function(req, res) {
    // we can pass in things in the query of a REST call!
    db.Destinations.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    console.log("I am res!")
});

// router.post('/', isAuthenticated, function(req, res) {
//     db.Destinations.create({
//         UserId: req.user.id,
//         ...req.body
//     })
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
// });