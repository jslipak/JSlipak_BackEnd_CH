const express = require('express');
const router = express.Router();

const viewRoutes = require('./view.routes');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const apiRoutes = require('./api.routes');

router.use('/api', apiRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/', viewRoutes);

module.exports = router;
