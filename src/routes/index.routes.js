const express = require('express');
const viewRoutes = require('./view.routes');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const apiRoutes = require('./api.routes');
const router = express.Router();

router.use('/api', apiRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/', viewRoutes);

module.exports = router;
