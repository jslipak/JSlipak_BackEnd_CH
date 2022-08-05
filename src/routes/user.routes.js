const express = require('express');
const router = express.Router();
const user = require('../services/user.services');
const upload = require('../middleware/multer.middleware');

// TODO: password change  user
router.get('/', user.getAll);
router.delete('/:uid', user.deleteById);
router.get('/:uid', user.findById);
router.patch('/:uid/edit', upload.single('avatar'), user.updateById);
router.patch('/:uid/password', user.updateByIdPassword);

module.exports = router;
