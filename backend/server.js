require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const medicine = require('./routes/medicines')
const userRoutes = require('./routes/user')
const storemedRoutes = require('./routes/storemeds')
const exmedRoutes = require('./routes/exmeds')
const orderRoutes = require('./routes/orders')
const usereditRoutes =  require('./routes/edituser')
const ordanalysisRoutes = require('./routes/orderanalysis')
const Medicine = require('./models/medicinemodel');
const User = require('./models/userModels');
const searchHistoryRoute = require('./routes/searchHistory');


const pdf = require('html-pdf')
const nodemailer = require('nodemailer')
const path = require('path')
const Searchmed = require('./models/searchMedimodel');
const Storemeds =require('./models/storemedModel') ;
const Oderprogresses =require('./models/oderpregres');
const Orders = require('./models/ordermodel');
const bodyParser = require('body-parser');
const cors = require('cors');

// express app
const app = express()

// middleware
app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes

app.use('/api/user', userRoutes)
app.use('/api/storemeds',storemedRoutes)
app.use('/api/exmeds',exmedRoutes)
app.use('/api/orderanalysis',orderRoutes)
app.use('/api/userediting',usereditRoutes)
app.use('/api/ordanalysis',ordanalysisRoutes)

// Add the search history route
app.use('/api/searchHistory', searchHistoryRoute);

//search medicine
const medicineRoutes = require('./routes/medicines');
app.use('/api/medicines', medicineRoutes);

// GET endpoint to get medicine details using _id
app.get('/api/medicines/:id', async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }
    
    res.json(medicine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

//get user details
app.get('/api/profileofuser/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
// Define route to delete user by email
app.delete('/api/profileofuser/:email', async (req, res) => {
  console.log("Delete request received for email: " + req.params.email);

  try {
    const deletedUser = await User.findOneAndDelete({ email: req.params.email });
    res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
});

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port',  )
    })
  })
  .catch((error) => {
    console.log(error)
  })

// //get usercount
const userRoute = require('./routes/adminroute');
app.use('/', userRoute);
// app.get("/getusercount",async(req,res)=>{
//   try{
//cjegtnuijrvwggdj
//email create
let mailTransporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:"ursafesrilankateam9@gmail.com",
    pass:"cjegtnuijrvwggdj"
  }
})

let details ={
  from:"ursafesrilankateam9@gmail.com",
  to:"shashi97dilhani@gmail.com",
  subject:"testing nodemailer",
  text:"here is monthly report"
}

mailTransporter.sendMail(details,(err)=>{
  if(err){
    console.log("it has an error",err)
  }else{
    console.log("email has send")
  }
})

//get usercount
app.get("/getusercount",async(req,res)=>{
  try{

    const userCount=await User.find().count();
    res.send({status:"ok",data:userCount});
  }catch(error){

    console.log(error);
  }
})

//get medicinecount
app.get("/getmedicinecount",async(req,res)=>{
  try{

    const userCount=await Medicine.find().count();
    res.send({status:"ok",data:userCount});
  }catch(error){

    console.log(error);
  }
})



//get medicinecount
app.get("/getstoremedicount",async(req,res)=>{
  try{

    const userCount=await Storemeds.find().count();
    res.send({status:"ok",data:userCount});
  }catch(error){

    console.log(error);
  }
})


//getall data

app.get("/getAllUser",async(req,res)=>{
  try{

    const allUser=await User.find({});
    res.send({status:"ok",data:allUser});
  }catch(error){

    console.log(error);
  }

})

//get all emails


// app.get("/getAllPharmacyEmail", async (req, res) => {
//   try {
//     const allUsers = await User.find({ userType: "Pharmacy" });
//     const emailArray = allUsers.map(user => user.email); // Extract email addresses from user objects
//     res.send({ status: "ok", data: emailArray });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ status: "error", message: "Internal server error" });
//   }
// });



app.get("/sendEmailToAllPharmacy", async (req, res) => {
  try {
    const allUsers = await User.find({ userType: "Pharmacy" });
    const emailArray = allUsers.map(user => user.email); // Extract email addresses from user objects

    const mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "ursafesrilankateam9@gmail.com",
        pass: "cjegtnuijrvwggdj"
      }
    });

    const emailPromises = emailArray.map(email => {
      const mailOptions = {
        from: "ursafesrilankateam9@gmail.com",
        to: email,
        subject: "Testing nodemailer",
        text: "Here is a monthly report...grab it",
       
      };

      return mailTransporter.sendMail(mailOptions);
    });

    Promise.all(emailPromises)
      .then(() => {
        console.log("Emails have been sent");
        res.send({ status: "ok", message: "Emails have been sent" });
      })
      .catch(error => {
        console.log("Error sending emails", error);
        res.status(500).send({ status: "error", message: "Error sending emails" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", message: "Internal server error" });
  }
});




//get all pharmcy details
app.get("/getAllPharmacy",async(req,res)=>{
  try{

    const allUser=await User.find({ userType: "Pharmacy" });
    res.send({status:"ok",data:allUser});
  }catch(error){

    console.log(error);
  }

})

//get farmacy count
app.get("/getPharmacycountVal",async(req,res)=>{
  try{
      //chnge this type to userType
    const allUser=await User.find({ userType: "Pharmacy" }).count();
    res.send({status:"ok",data:allUser});
  }catch(error){

    console.log(error);
  }

})



app.get("/getAllAdmin",async(req,res)=>{
  try{

    const allUser=await User.find({ userType: "Administrator" });
    res.send({status:"ok",data:allUser});
  }catch(error){

    console.log(error);
  }

})

//get Admin count
app.get("/getAdmincountVal",async(req,res)=>{
  try{
      //chnge this type to userType
    const allUser=await User.find({ userType: "Administrator" }).count();
    res.send({status:"ok",data:allUser});
  }catch(error){

    console.log(error);
  }

})

app.get("/getAllCus",async(req,res)=>{
  try{

    const allUser=await User.find({ userType: "Customer" });
    res.send({status:"ok",data:allUser});
  }catch(error){

    console.log(error);
  }

})

//customer count
app.get("/getCustomercountVal",async(req,res)=>{
  try{
      //chnge this type to userType
    const allUser=await User.find({ userType: "Customer" }).count();
    res.send({status:"ok",data:allUser});
  }catch(error){

    console.log(error);
  }

})

// get amount of user type by its useType
app.get('/getvarityuseramount', async (req, res) => {
  try {
    const countValues = await User.aggregate([
      { $group: { _id: "$userType", countValue: { $sum: 1 } } },
      // { $sort: { countValue: -1 } },
      // { $limit: 10 }
    ]);
    
    res.json(countValues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
  

//get medicine name and its count value
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/getmedicinecountbyitsname', async (req, res) => {
  try {
    const countValues = await Storemeds.aggregate([
      { $group: { _id: "$medicine_name", countValue: { $sum: "$quantity" } } }
    ]);
    res.json(countValues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//get most searched medicine and its count value
app.get('/getmostsearchmedi', async (req, res) => {
  try {
    const countValues = await Searchmed.aggregate([
      { $group: { _id: "$medicine_name", countValue: { $sum: 1 } } },
      { $sort: { countValue: -1 } },
      { $limit: 10 }
    ]);
    
    res.json(countValues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//get medicine search count

app.get("/getSearchcountVal",async(req,res)=>{
  try{
      //chnge this type to userType
    const allUser=await Searchmed.find({  }).count();
    res.send({status:"ok",data:allUser});
  }catch(error){

    console.log(error);
  }

})

//get Order Count 
app.get("/getSearchcountVal",async(req,res)=>{
  try{
      //chnge this type to userType
    const allUser=await Storemeds.find({  }).count();
    res.send({status:"ok",data:allUser});
  }catch(error){

    console.log(error);
  }

})

//get count value of order progress


app.get("/getOrdercountVal",async(req,res)=>{
  try{
      //chnge this type to userType
    const allUser=await Oderprogresses.find({  }).count();
    res.send({status:"ok",data:allUser});
  }catch(error){

    console.log(error);
  }

})


// get successfull order count value
app.get("/getsuccessOrdercountVal",async(req,res)=>{
  try{
      //chnge this type to userType
    const allUser=await Oderprogresses.find({successfull : true  }).count();
    res.send({status:"ok",data:allUser});
  }catch(error){

    console.log(error);
  }

})


// get cancle order count value
app.get("/getcancledOrdercountVal",async(req,res)=>{
  try{
      //chnge this type to userType
    const allUser=await Oderprogresses.find({cancelled : true  }).count();
    res.send({status:"ok",data:allUser});
  }catch(error){

    console.log(error);
  }

})


//order details seen eka
//get full orderCount
app.get("/getordercount",async(req,res)=>{
  try{

    const userCount=await Orders.find().count();
    res.send({status:"ok",data:userCount});
  }catch(error){

    console.log(error);
  }
})

//get full order detils
app.get("/getAllOredrs",async(req,res)=>{
  try{

    const userCount=await Orders.find({});
    res.send({status:"ok",data:userCount});
  }catch(error){

    console.log(error);
  }
})
//get oredr Quantity ccount by its name
app.get('/getordercountbyitsname', async (req, res) => {
  try {
    const countValues = await Orders.aggregate([
      { $group: { _id: "$medicine_name", countValue: { $sum: "$medicine_qty" } } }
    ]);
    res.json(countValues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get('/getorderCostbyyear', async (req, res) => {
  const latestYear = new Date().getFullYear();
  const oldestYear = latestYear - 4; // get data from the last 5 years
  
  try {
    const countValues = await Orders.aggregate([
      { $match: { year: { $gte: oldestYear, $lte: latestYear } } },
      { $group: { _id: "$year", countValue: { $sum: "$order_cost" } } },
      { $sort: { _id: 1 } } // sort by year in ascending order
    ]);
    
    res.json(countValues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get('/getorderamountbyyear', async (req, res) => {
  try {
    const countValues = await Orders.aggregate([
      { $group: { _id: "$year", countValue: { $sum: 1 } } },
      { $sort: { countValue: -1 } },
      // { $limit: 10 }
    ]);
    
    res.json(countValues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//get message of user
// app.get("/getmsg", async (req, res) => {
//   try {
//     const users = await User.find({}, 'message');
//     res.send({ status: "ok", data: users });
//   } catch (error) {
//     console.log(error);
//   }
// })

// app.get('/getmsg', async (req, res) => {
//   try {
//     const users = await User.find({}, { _id: 0, userType: 1, message: 1 });
//     const messages = users.map(user => {
//       let message;
//       switch (user.userType) {
//         case 'Customer':
//           message = 'new customer registered';
//           break;
//         case 'Pharmacy':
//           message = 'new pharmacy registered';
//           break;
//         case 'Administrator':
//           message = 'new administrator registered';
//           break;
//         default:
//           message = 'new registered';
//           break;
//       }
//       return {
//         userType: user.userType,
//         message: message
//       };
//     });
//     res.send({ status: 'ok', data: messages });
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.get('/getmsglatest', async (req, res) => {
//   try {
//     const latestUser = await User.findOne({}, {}, { sort: { '_id' : -1 } });
//     const message = `New ${latestUser.userType} who named ${latestUser.name} with email ${latestUser.email}  has registered.`;
//     res.send({ status: 'ok', data: { userType: latestUser.userType, message: message } });
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.get('/getmsglatest', async (req, res) => {
//   try {
//     const latestUser = await User.findOne({}, {}, { sort: { '_id' : -1 } });
//     const currentDate = new Date();
//     const message = `on ${currentDate.toLocaleDateString()} at ${currentDate.toLocaleTimeString()} \n New ${latestUser.userType} who named ${latestUser.name} with email ${latestUser.email} has registered .`;
//     res.send({ status: 'ok', data: { userType: latestUser.userType, message: message } });
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.get('/getmsgs', async (req, res) => {
//   try {
//     const users = await User.find({}, {}, { sort: { '_id' : -1 } });
//     const messages = users.map(user => {
//       const currentDate = new Date();
//       const message = `on ${currentDate.toLocaleDateString()} at ${currentDate.toLocaleTimeString()} - New ${user.userType} who named ${user.name} with email ${user.email} has registered.`;
//       return {
//         userType: user.userType,
//         message: message
//       };
//     });
//     res.send({ status: 'ok', data: messages });
//   } catch (error) {
//     console.log(error);
//   }
// });


// app.get('/getmsgs', async (req, res) => {
//   try {
//     const users = await User.find({}, {}, { sort: { '_id' : -1 } });
//     const messages = users.map(user => {
//       const registrationTime = user._id.getTimestamp();
//       const message = `on ${registrationTime.toLocaleDateString()} at ${registrationTime.toLocaleTimeString()} - New ${user.userType} who named ${user.name} with email ${user.email} has registered.`;
//       return {
//         userType: user.userType,
//         message: message
//       };
//     });
//     res.send({ status: 'ok', data: messages });
//   } catch (error) {
//     console.log(error);
//   }
// });

app.get('/getmsgs', async (req, res) => {
  try {
   

    const users = await User.find({}, {}, { sort: { '_id' : -1 }, limit: 1  });
    const messages = users.map(user => {
      const registrationTime = user._id.getTimestamp();
      let message = '';
      if (user.userType === 'Administrator ') {
        message = `on ${registrationTime.toLocaleDateString()} at ${registrationTime.toLocaleTimeString()} - New ${user.userType} who named ${user.name} with email ${user.email} has registered.`;
      } else if (user.userType === 'Customer  ') {
        message = `on ${registrationTime.toLocaleDateString()} at ${registrationTime.toLocaleTimeString()} - New ${user.userType} who named ${user.name} with email ${user.email} has registered.`;
      }else {
        message = `on ${registrationTime.toLocaleDateString()} at ${registrationTime.toLocaleTimeString()} - New ${user.userType} named ${user.pharmacyName} with email ${user.email} has registered.`;
      }
      return {
        userType: user.userType,
        message: message
      };
    });
    res.send({ status: 'ok', data: messages });
  } catch (error) {
    console.log(error);
  }
});




//get email of user
app.get("/getusersemail", async (req, res) => {
  try {
    const users = await User.find({ $or: [{ userType: "Pharmacy" }, { userType: "Administrator" }] }, 'email');
    res.send({ status: "ok", data: users });
  } catch (error) {
    console.log(error);
  }
});



//email system

app.get('/send-pdf-email', async (req, res) => {
  try {
    const users = await User.find({ userType: { $in: ['Pharmacy', 'Administrator'] } }, 'email');

    const html = '<h1>Your PDF content goes here</h1>';

    pdf.create(html).toBuffer(async (err, buffer) => {
      if (err) {
        console.error(err);
        return res.send({ status: 'error', message: 'Failed to create PDF' });
      }

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'your_email@gmail.com',
          pass: 'your_email_password'
        }
      });

      const mailOptions = {
        from: 'your_email@gmail.com',
        to: users.map(user => user.email).join(', '),
        subject: 'PDF Report',
        attachments: [{
          filename: 'report.pdf',
          content: buffer
        }]
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          return res.send({ status: 'error', message: 'Failed to send email' });
        }

        console.log('Email sent:', info.response);
        res.send({ status: 'ok', message: 'Email sent successfully' });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: 'error', message: 'Server error' });
  }
});

  