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
const Searchmed = require('./models/SearchHistory');
const Storemeds =require('./models/storemedModel') ;
const Oderprogresses =require('./models/oderpregres');
// const Orders = require('./models/ordermodel');
const Order= require('./models/orderModel');
const bodyParser = require('body-parser');
const cors = require('cors');

const medDailyCountRoutes = require("./routes/medDailyCountRoutes")
// express app simplifies the process of building web applications and APIs.
let ejs = require("ejs");
const axios = require('axios');


// express app
const app = express()

// middleware CORS (Cross-Origin Resource Sharing) is a mechanism that allows web browsers to make cross-origin HTTP requests securely.
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

//pdf creating


app.get("/sendEmailToAlladmin", async (req, res) => {
  try {
    const allUsers = await User.find({ userType: "Administrator" });
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
        subject: "UrgentEmail form UrSAFESRILANKA",
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



app.get("/generateReport", async (req, res) => {
  try {
    const allUsers = await User.find({ userType: "Pharmacy" });
    const emailArray = allUsers.map(user => user.email); // Extract email addresses from user objects

    //get user count
    const response = await axios.get("http://localhost:4000/getusercount"); // Update the URL and port
    const userCount = response.data.data.toString(); // Access the 'data' property and convert it to a string

    //get pharmacy count
    const response2 = await axios.get("http://localhost:4000/getPharmacycountVal"); // Update the URL and port
    const pharmacyCount = response2.data.data.toString(); // Access the 'data'

    //get pharmacy count
    const response3 = await axios.get("http://localhost:4000/getCustomercountVal"); // Update the URL and port
    const customerCount = response3.data.data.toString(); // Access the

    //most search medcine
     
     const response4 = await axios.get("http://localhost:4000/getmostsearchmedi"); // Update the URL and port
     const mostsearchedmedilist = response4.data; // Access the
     

     console.log("response4.data:", response4.data);

     
    
    const response5 = await axios.get("http://localhost:4000/getorderCountbymediname"); // Update the URL and port
    const mostorderedmedicines = response5.data; // Access the
    

    console.log("response5.data:", response5.data);

     let users = [
      {
        name: "Users",
        data: userCount,
      },
      {
        name: "Pharmacy Count",
        data: pharmacyCount,
      },
      {
        name: "Coustomer Count",
        data: customerCount,
      },
      {
        name: "Most Searched Medicines",
        data: mostsearchedmedilist.map(medicine => `${medicine._id}: ${medicine.countValue}`).join(', '),
      },
      {
        name: "Most orderd Medicines",
        data: mostorderedmedicines.map(medicine => `${medicine.medicine_name}: ${medicine.countValue}`).join(', '),
      }
      
    ];
    // if (Array.isArray(mostsearchedmedilist)) {
    //   users.push({
    //     name: 'Most Searched Medicines',
    //     data: mostsearchedmedilist.map(medicine => `${medicine._id}: ${medicine.countValue}`).join(', '),
    //   });
    // } else {
    //   console.log('Most searched medicines data not available');
    //   console.log('mostsearchedmedilist:', mostsearchedmedilist);

    // }
    


    ejs.renderFile(
      path.join(__dirname, "view", "report-template.ejs"), // Update the file path here
      {
        users: users,
      },
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          let options = {
            height: "11.25in",
            width: "8.5in",
            header: {
              height: "20mm",
            },
            footer: {
              height: "20mm",
            },
          };
          pdf.create(data, options).toFile("test.pdf", function (err, file) {
            if (err) {
              res.send(err);
            } else {
              res.send("File created successfully");
              const nodemailer = require("nodemailer");
              let mailTransporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "ursafesrilankateam9@gmail.com",
                  pass: "cjegtnuijrvwggdj",
                },
              });
              let mailDetails = {
                from: "ursafesrilankateam9@gmail.com",
                to: emailArray.join(","),
                subject: "testing nodemailer",
                text: "here is monthly report",
                attachments: [
                  {
                    path: file.filename,
                  },
                ],
              };
              mailTransporter.sendMail(mailDetails, function (err, info) {
                if (err) {
                  console.log("There is an error", err);
                } else {
                  console.log("Email has been sent");
                }
              });
            }
          });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.send(err.message);
  }
});








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
  subject:"project has starting",
  text:"grab your report "
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
      { $group: { _id: "$brand", countValue: { $sum: "$quantity" } } }
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
      { $group: { _id: "$searchTerm", countValue: { $sum: 1 } } },
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
    const allUser=await Order.find({  }).count();
    res.send({status:"ok",data:allUser});
  }catch(error){

    console.log(error);
  }

})

//get order value by month
app.get("/getOrdercountValbymonth", async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1
        }
      }
    ]);

    res.send({ status: "ok", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", error: "Internal Server Error" });
  }
});



// // get successfull order count value
app.get("/getsuccessOrdercountVal",async(req,res)=>{
  try{

    const userCount=await Order.countDocuments({isDelivered: true});
    res.send({status:"ok",data:userCount});
  }catch(error){

    console.log(error);
  }
})
//get successsfull order value by its month
app.get("/getsuccessOrdercountValbymonth", async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $match: {
          isDelivered: true
        }
      },
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1
        }
      }
    ]);

    res.send({ status: "ok", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", error: "Internal Server Error" });
  }
});




// get cancle order count value


app.get("/getcancledOrdercountVal",async(req,res)=>{
  try{

    const userCount=await Order.countDocuments({isDelivered: false});
    res.send({status:"ok",data:userCount});
  }catch(error){

    console.log(error);
  }
})


//get cancled order value by its month
app.get("/getcancleOrdercountValbymonth", async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $match: {
          isDelivered: false
        }
      },
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1
        }
      }
    ]);

    res.send({ status: "ok", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", error: "Internal Server Error" });
  }
});



//order details seen eka
//get full orderCount
app.get("/getordercount",async(req,res)=>{
  try{

    const userCount=await Order.find().count();
    res.send({status:"ok",data:userCount});
  }catch(error){

    console.log(error);
  }
})

//get full order detils
app.get("/getAllOredrs",async(req,res)=>{
  try{

    const userCount=await Order.find({});
    res.send({status:"ok",data:userCount});
  }catch(error){

    console.log(error);
  }
})
//get oredr Quantity ccount by its name
app.get('/getordercountbyitsname', async (req, res) => {
  try {
    const countValues = await Order.aggregate([
      { $group: { _id: "$medicine_name", countValue: { $sum: "$medicine_qty" } } }
    ]);
    res.json(countValues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// these both 3
//get order name by its quantity
// app.get('/getorderCountbymediname', async (req, res) => {
//   try {
//     const countValues = await Order.aggregate([
//       { $unwind: "$order_items" },
//       {
//         $group: {
//           _id: "$order_items.name",
//           countValue: { $sum: "$order_items.quantity" }
//         }
//       },
//       { $sort: { _id: 1 } } // sort by name in ascending order
//     ]);
    
//     res.send({status:"ok",data:countValues});
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
app.get('/getorderCountbymediname', async (req, res) => {
  try {
    const countValues = await Order.aggregate([
      {
        $unwind: "$orderItems" // Unwind the orderItems array
      },
      {
        $group: {
          _id: "$orderItems.name",
          countValue: { $sum: "$orderItems.quantity" }
        }
      },
      {
        $project: {
          _id: 0,
          medicine_name: "$_id",
          countValue: 1
        }
      },
      { $sort: { countValue: 1 } } // Sort by countValue in ascending order
    ]);

    res.json(countValues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/getorderPricebymethod', async (req, res) => {
  try {
    const priceValues = await Order.aggregate([
      {
        $unwind: "$orderItems" // Unwind the orderItems array
      },
      {
        $group: {
          _id: "$paymentMethod",
          totalPrice: { $sum: "$orderItems.price" }
        }
      },
      {
        $project: {
          _id: 0,
          paymentMethod: "$_id",
          totalPrice: 1
        }
      },
      { $sort: { totalPrice: 1 } } // Sort by totalPrice in ascending order
    ]);

    res.json(priceValues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get('/getorderCostbyyear', async (req, res) => {
  try {
    const countValues = await Order.aggregate([
      {
        $group: {
          _id: { $paymentmethod: "$paymentMethod" },
          countValue: { $sum:  "$orderItems.price"  }
        }
      },
      {
        $project: {
          _id: 0,
          paymentmethod: "$_id",
          countValue: 1
        }
      },
      { $sort: { countValue: 1 } } // sort by year in ascending order
    ]);

    res.json(countValues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get('/getorderamountbyyear', async (req, res) => {
  try {
    const countValues = await Order.aggregate([
      {
        $group: {
          _id: { $year: "$Date" },
          countValue: { $sum: { $size: "$orderItems" } }
        }
      },
      {
        $project: {
          _id: 0,
          year: "$_id",
          countValue: 1
        }
      },
      { $sort: { year: 1 } } // sort by year in ascending order
    ]);

    res.json(countValues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





app.get('/getmsgs', async (req, res) => {
  try {
   

    const users = await User.find({}, {}, { sort: { '_id' : -1 }, limit: 3  });
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

app.use('/api/medDailyCount', medDailyCountRoutes);