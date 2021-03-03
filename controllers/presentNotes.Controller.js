const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;
/**
 * presentNote - Read All
 */
router.get('/', isAuthenticated, function(req, res) {
    // we can pass in things in the query of a REST call!
    db.presentNote.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * presentNote - Read One
 */
router.get('/:id', isAuthenticated, function(req, res) {
    db.presentNote.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * presentNote - Create
 * Notice how we are also taking in the User Id! Important!
 * We need the isAuthenticated middleware in the route to have a user in the request
 */
router.post('/', isAuthenticated, function(req, res) {
    db.presentNote.create({
        UserId: req.user.id,
        ...req.body
    })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * presentNote - Update
 */
router.put('/:id', isAuthenticated, function(req, res) {
    db.presentNote.update(req.body, { where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * presentNote - Delete
 */
router.delete('/:id', isAuthenticated, function(req, res) {
    db.presentNote.destroy({ where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Defining methods for the booksController
module.exports = router;
