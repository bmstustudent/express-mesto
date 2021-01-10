const router = require('express').Router();
const { getUsers, getUser } = require('../controllers/getUsersInfo.js');

router.get('/', getUsers);
router.get('/:id', getUser);

module.exports = router;
