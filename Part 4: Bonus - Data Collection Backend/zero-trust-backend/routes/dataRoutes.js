const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/submit', dataController.submitData);
router.get('/retrieve', dataController.getData);
router.get('/company-names', dataController.getCompanyNamesAndIds);
router.get('/:id', dataController.getDataById);


module.exports = router;