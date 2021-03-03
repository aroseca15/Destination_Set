const router = require('express').Router();

// Import our controllers
const noteRoutes = require('./notesController');
const userRoutes = require('./usersController');
const authRoutes = require('./authController');
const aquizRoutes = require('./aquizController');
const destinationRoutes = require('./DestinationController');
const browserRoutes = require('./browserController');
const calSchedRoutes = require('./calSchedController');
const PostMeetRoutes = require('./postMeetingObsController');
const PresentNotesRoutes = require('./presentNotes.Controller');

// Hook up to the router
router.use('/api/notes', noteRoutes);
router.use('/api/sched', calSchedRoutes);
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/aquiz', aquizRoutes);
router.use('/api/destinations', destinationRoutes);
router.use('/api/external', browserRoutes);
router.use('/api/postmeet', PostMeetRoutes);
router.use('/api/presentnotes', PresentNotesRoutes);


// Export the router
module.exports = router;
