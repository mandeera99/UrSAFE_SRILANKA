const express = require('express');
const router = express.Router();
const medDailyCountController = require('../controllers/medDailyCountController');

// router.get(
//   '/getDailyCountByMedicineName/:name',
//   medDailyCountController.getDailyCountByName
// );

router.post(
  '/getDailyMedicineCountByPharmacy',
  medDailyCountController.getDailyMedicineCountByPharmacy
);

module.exports = router;
