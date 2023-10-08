const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')

router.post('/create', userController.createUser);
router.get('/users/all', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);



module.exports = router