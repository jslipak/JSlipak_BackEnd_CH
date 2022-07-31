const express = require('express');
const router = express.Router();
const user = require('../services/user.services');

// TODO: password change and edit user
router.get('/', user.getAll);
router.delete('/:uid', user.deleteById);
router.get('/:uid', user.findById);
router.get('/:uid/edit', user.updateById);

module.exports = router;
