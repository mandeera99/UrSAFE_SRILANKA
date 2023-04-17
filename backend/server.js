require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const medicine = require('./routes/medicines')
const userRoutes = require('./routes/user')
const Medicine = require('./models/medicinemodel');
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


  