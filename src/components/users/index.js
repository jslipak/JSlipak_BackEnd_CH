const express = require('express');
const router = express.Router();
const user = require('./service/user.service');
const upload = require('../../middleware/multer.middleware');

router.get('/', user.getAll);
router.delete('/:uid', user.deleteById);
router.get('/:uid', user.findById);
router.patch('/:uid/edit', upload.single('avatar'), user.updateById);
router.patch('/:uid/password', user.updateByIdPassword);

module.exports = router;
