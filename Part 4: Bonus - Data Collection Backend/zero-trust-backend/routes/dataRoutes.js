const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/submit', dataController.submitData);
router.get('/retrieve', dataController.getData);

module.exports = router;
