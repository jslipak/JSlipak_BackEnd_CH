const express = require('express');
const router = express.Router();

const viewRoutes = require('../components/views');
const authRoutes = require('../components/auths');
const userRoutes = require('../components/users');
const apiRoutes = require('./api.routes');

router.use('/api', apiRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/', viewRoutes);

module.exports = router;
