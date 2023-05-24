// controllers/searchHistoryController.js
const SearchHistory = require('../models/SearchHistory');

exports.saveSearchHistory = async (req, res) => {
  const { email, searchTerm } = req.body;

  try {
    const searchHistory = new SearchHistory({
      email,
      searchTerm
    });

    await searchHistory.save();

    res.status(200).json({ message: 'Search history saved successfully' });
  } catch (error) {
    console.error('Error saving search history:', error);
    res.status(500).json({ message: 'Error saving search history' });
  }

}

  exports.getSearchHistory = async (req, res) => {
    const { email } = req.query;
  
    try {
      // Fetch search history for the specified email
      const searchHistory = await SearchHistory.find({ email });
  
      res.status(200).json(searchHistory);
    } catch (error) {
      console.error('Error retrieving search history:', error);
      res.status(500).json({ message: 'Error retrieving search history' });
    }
  
  // exports.getSearchHistory = async (req, res) => {
  //   try {
  //     // Fetch all search history
  //     const searchHistory = await SearchHistory.find();
    
  //     res.status(200).json(searchHistory);
  //   } catch (error) {
  //     console.error('Error retrieving search history:', error);
  //     res.status(500).json({ message: 'Error retrieving search history' });
  //   }
  // }
  
};
