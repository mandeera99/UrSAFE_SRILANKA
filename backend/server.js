require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const medicine = require('./routes/medicines')
const userRoutes = require('./routes/user')
const storemedRoutes = require('./routes/storemeds')
const Medicine = require('./models/medicinemodel');
const User = require('./models/userModels');

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


  