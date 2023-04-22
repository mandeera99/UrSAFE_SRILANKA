const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['Customer', 'Pharmacy', 'Administrator'],
    default: 'Customer'
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: String,
    required: false
  },
  pharmacyName: {
    type: String,
    required: false
  },
  zipCode: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  }
})

// static signup method
userSchema.statics.signup = async function (email,password,userType,name,address,phoneNumber,pharmacyName,zipCode,state,city) {

  // validation
  console.log('Email:', email);
  console.log('adress:', address);
  console.log('type:', userType);
  if (!email || !password) {
    throw Error('email and password fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ 
    email,
    password: hash,
    userType: userType,
    name,
    address,
    phoneNumber,
    pharmacyName,
    zipCode,
    state,
    city
  })
  return user
}

// static login method
userSchema.statics.login = async function (email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }
 
  return user
}

module.exports = mongoose.model('User', userSchema)