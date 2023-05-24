app.get('/getOrderCostByMonth', async (req, res) => {
    const currentDate = new Date();
    const oldestDate = new Date();
    oldestDate.setMonth(currentDate.getMonth() - 4); // get data from the last 4 months
  
    try {
      const countValues = await Orders.aggregate([
        {
          $match: {
            order_date: {
              $gte: oldestDate,
              $lte: currentDate,
            },
          },
        },
        {
          $group: {
            _id: {
              year: { $year: '$order_date' },
              month: { $month: '$order_date' },
            },
            countValue: { $sum: '$order_cost' },
          },
        },
        { $sort: { '_id.year': 1, '_id.month': 1 } }, // sort by year and month in ascending order
      ]);
  
      res.json(countValues);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  