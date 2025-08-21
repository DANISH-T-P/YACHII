const express = require('express');
const router = express.Router();
const pageController = require('../controllers/page.controller');

router.get('/home', pageController.getHome);
router.get('/about', pageController.getAbout);
router.get('/career', pageController.getCareer);
router.get('/contact', pageController.getContact);

module.exports = router;
