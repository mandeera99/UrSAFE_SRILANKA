/* const express = require('express');
const router = express.Router();
const Medicine = require('../models/module');

// Search for medicines by name
router.get('/search', async (req, res) => {
  try {
    const { name } = req.query; 
    const regex = new RegExp(name, 'i');
    const medicines = await Medicine.find({ name: regex });
    res.json(medicines);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

 */
const recordsPerPage = require("../config/pagination");
const Medicine = require("../models/medicinemodel");
const getProducts2 = async (req, res, next) => {
  try {

       const medicines = await Medicine.find({});
      

    res.json({
      medicines
    });
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
      //pagination
      const pageNum = Number(req.query.pageNum) || 1;

      // sort by name, price etc.
      let sort = {};
      const sortOption = req.query.sort || "";
      if (sortOption) {
        let sortOpt = sortOption.split("_");
        sort = { [sortOpt[0]]: Number(sortOpt[1]) };
      }

      const searchQuery = req.params.searchQuery || "";
      let searchQueryCondition = {};
      let select = {};
    if (searchQuery) {
      queryCondition = true;
      searchQueryCondition = { $text: { $search: searchQuery } };
      select = {
        score: { $meta: "textScore" },
      };
      sort = { score: { $meta: "textScore" } };
    }
      const totalProducts = await Medicine.countDocuments();
       const medicines = await Medicine.find({})
       .select(select)
       .skip(recordsPerPage * (pageNum - 1))
       .sort(sort)
       .limit(recordsPerPage);
      

    res.json({
      medicines,
      pageNum,
      paginationLinksNumber: Math.ceil(totalProducts / recordsPerPage),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  getProducts2
}