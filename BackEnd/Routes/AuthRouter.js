const { registration, login } = require('../Controllers/AuthController');
const { registrationValidations, loginValidations } = require('../Middlewares/AuthValidators');

const router = require('express').Router();

router.post('/login', loginValidations, login );

router.post('/register', registrationValidations, registration );

module.exports = router;