var express = require('express');
var router = express.Router();
var commonCtrl = require('../controllers/common.controller');

// Auth API 
router.post('/xmltv', xmltvCtrl.fetchXml);

module.exports = router;

