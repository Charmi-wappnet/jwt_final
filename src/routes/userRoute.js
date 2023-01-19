const express = require('express');
const { createUser, getUserByUserId, getUsers, updateUser, deleteUser, login } = require('../controller/userController');
const router = express.Router();

router.post('/', createUser);
router.get('/',getUsers);
router.get('/:id', getUserByUserId);
router.patch('/', updateUser);
router.delete('/', deleteUser);
router.post('/login', login);

module.exports = router;