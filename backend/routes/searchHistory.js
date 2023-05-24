// routes/searchHistory.js
const express = require('express');
const router = express.Router();
const searchHistoryController = require('../controllers/searchHistoryController');

router.post('/search-history', searchHistoryController.saveSearchHistory);
router.get('/getsearch-history', searchHistoryController.getSearchHistory);

module.exports = router;
