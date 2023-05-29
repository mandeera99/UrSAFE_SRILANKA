const Orders = require('../models/orderModel')
const { ObjectId } = require('mongoose').Types;

exports.getDailyCountByName = async (req, res, next) => {
  const { name } = req.params;
  console.log(name);
  //   res.send('hi');
  const dateToCount = Date.now();
  var start = new Date();
  start.setHours(0, 0, 0, 0);

  var end = new Date();
  end.setHours(23, 59, 59, 999);

  const year = 2023;

  const dailyMedCount = await Orders.find({
    // date: { $gte: start, $lt: end },
    medicine_name: name,
    year: year,
  }).count();
  // // const dailyStudents = await DailyCount.find({faculty:faculty});

  //   res.status();
  if (!dailyMedCount) {
    return res.status(404).json({
      status: 'fail',
      message: 'No Medicine',
    });
  }

  return res.status(200).json({
    status: 'success',
    data: {
      dailyMedCount: dailyMedCount,
    },
  });
};

exports.getDailyMedicineCountByPharmacy = async (req, res, next) => {
  try{
    const { medicineName, pharmacyId } = req.body;
    console.log(medicineName, pharmacyId);
    //   res.send('hi');
    const dateToCount = Date.now();
    var start = new Date();
    start.setHours(0, 0, 0, 0);
  
    var end = new Date();
    end.setHours(23, 59, 59, 999);
  
    // const year = 2023;
  
    /* const dailyMedCount = await Orders.countDocuments({
      // date: { $gte: start, $lt: end },
      orderItems: { $elemMatch: { name: medicineName } },
      pharmacy: new ObjectId(pharmacyId),
      Date: { $gte: start },
    }); */
  
    console.log(start, end)
   /* Total Quantity of the Given Medicine name */
    const dailyMedCount = await Orders.aggregate([
      {
        $match: {
          orderItems: { $elemMatch: { name: medicineName } },
          pharmacy: new ObjectId(pharmacyId),
          Date: { $gte: start , $lt: end},
        },
      },
      {
        $project: {
          orderItems: {
            $filter: {
              input: '$orderItems',
              as: 'orderItem',
              cond: { $eq: ['$$orderItem.name', medicineName] },
            },
          },
        },
      },
      {
        $unwind: '$orderItems',
      },
      {
        $group: {
          _id: null,
          totalQuantity: {
            $sum: { $multiply: ['$orderItems.quantity', '$orderItems.count'] },
          },
        },
      },
    ]);
    // // const dailyStudents = await DailyCount.find({faculty:faculty});
  console.log(dailyMedCount)
    //   res.status();
    if (dailyMedCount === null || dailyMedCount.length === 0) {
      return res.status(404).json({
        status: 'fail',
        message: 'No Medicine',
        data: {
          dailyMedCount: 0,
        },
      });
    }
  
    return res.status(200).json({
      status: 'success',
      data: {
        dailyMedCount: dailyMedCount[0].totalQuantity,
      },
    });
  }catch(error){
    res.status(500).json({
      status:"fail",
      message: "Something went wrong...",
      error
    })
  }
};

/* exports.getDailyStudentsCountByFaculty = catchAsync(async(req,res)=>{
    const {faculty} = req.params;
    // console.log(faculty);
    const dateToCount =  Date.now();
    var start = new Date();
    start.setHours(0,0,0,0);

    var end = new Date();
    end.setHours(23,59,59,999);


    const dailyStudents = await DailyCount.find({ date: {$gte: start, $lt: end},faculty:faculty}).count();
    console.log(dailyStudents);
    // const dailyStudents = await DailyCount.find({faculty:faculty});

    if(!dailyStudents){
        res.status(404).json({
            status:'fail',
            msg:'No Students'
        })
    }

    res.status(200).json({
        status:'success',
        data:{
            dailyStudents
        }
    })
}) */
