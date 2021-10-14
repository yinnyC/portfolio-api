const express = require('express');
const router = express.Router();

const mainController = require('../controllers/index');

router.get('/', mainController.index);
router.get('/projects', mainController.getProjects);
router.get('/publications', mainController.getPublications);

module.exports = router;
