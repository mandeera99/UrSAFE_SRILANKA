const express = require('express');
const {
    createStoremed,
    getStoremeds,
    getStoremed,
    deleteStoremed,
    updateStoremed
} = require('../controllers/storemedController')

const router = express.Router();

//GET all medicines
router.get('/', getStoremeds)

//GET a single medicine
router.get('/:query', getStoremed)

//POST a new medicine
router.post('/', createStoremed)

//DELETE a medicine
router.delete('/:id', deleteStoremed)

//UPDATE a medicine
router.put('/:id', updateStoremed)


// //const services = require('../services/render');
// const controller = require('../controller/controller');

// /**
//  *  @description Root Route
//  *  @method GET /
//  */
// route.get('/', services.storemed);

// /**
//  *  @description add users
//  *  @method GET /add-user
//  */
// route.get('/add-med', services.add_med)

// /**
//  *  @description for update user
//  *  @method GET /update-user
//  */
// route.get('/update-med', services.update_med)


// // API
// // route.post('/api/users', controller.create);
// // route.get('/api/users', controller.find);
// // route.put('/api/users/:id', controller.update);
// // route.delete('/api/users/:id', controller.delete);


// //module.exports = route;
// // router.get("/",(req,res) => {
// //     res.render('index',{title: "Home Page"});
// // });

 module.exports = router