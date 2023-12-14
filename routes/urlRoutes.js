const express = require('express');
const ShortUrls = require('../models/urlModels');
const { handleUrls,handlePostUrls,handleDynamicUrls} = require('../controller/urls')

const router = express.Router();

router.get('/', handleUrls)
router.post('/create', handlePostUrls);
router.get('/:ShortUrl', handleDynamicUrls)




module.exports = router;