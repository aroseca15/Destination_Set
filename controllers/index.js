const router = require('express').Router();

// Import our controllers
const noteRoutes = require('./notesController');
const userRoutes = require('./usersController');
const authRoutes = require('./authController');
const aquizRoutes = require('./aquizController');
const destinationRoutes = require('./DestinationController');
const browserRoutes = require('./browserController');

// Hook up to the router
router.use('/api/notes', noteRoutes);
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/aquiz', aquizRoutes);
router.use('/api/destinations', destinationRoutes);
router.use('/api/external', browserRoutes);


// Export the router
module.exports = router;
