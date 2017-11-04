var express = require('express');
var router = express.Router();
var xmltvCtrl = require('../controllers/xmltv.controller');

// Auth API 
router.get('/xmltv', xmltvCtrl.getXml);

module.exports = router;

