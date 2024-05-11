const express = require('express');
const router = express.Router();

// middleware
const auth = require('../middleware/auth');

const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('', auth, homeController.index);

router.get('/users', userController.index);
router.post('/users', userController.validation(), userController.store);
router.get('/users/:id', userController.edit);
router.delete('/users/:id', userController.destroy);

router.post('/auth/login', authController.logInValidation(), authController.login);

module.exports = router;
