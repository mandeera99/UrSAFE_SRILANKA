// models/SearchHistory.js
const mongoose = require('mongoose');

const searchHistorySchema = new mongoose.Schema({
  email: {
    type: String,
    required: false
  },
  searchTerm: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const SearchHistory = mongoose.model('searchhistories', searchHistorySchema);

module.exports = SearchHistory;
