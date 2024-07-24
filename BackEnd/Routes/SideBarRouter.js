const SideBar = require('../Controllers/SideBarController');
const checkAuthenticated = require('../Middlewares/checkAuthenticated');

const router = require('express').Router();

router.get('/', checkAuthenticated, SideBar);

module.exports = router;