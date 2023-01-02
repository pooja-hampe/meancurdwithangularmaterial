const express = require('express');
const employeModel = require('../model/employe');

// Using express and routes
const app = express();
const employeRoute = express.Router();

// Employee module which is required and imported
let employe = require('../model/employe');


//add employe
employeRoute.route('/addemploye').post((req, res, next) => {
  employeModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data);
      console.log('employe added successfully')
    }
  })
});
// // Get All Employees
employeRoute.route('/').get((req, res) => {
  employeModel.find((error, data) => {
    if (error) {
      return next(error);
      
    } else {
      res.json(data);
      
    }
  })
})
// Get single employee


// employeRoute.get('/getemploye/:id',(req,res,next)=>{
//   console.log(req.params.id)
// })
// employeRoute.route('/getemploye/:id ').get((req, res,next) => {
//   employeModel.findById(req.params.id, 
//     (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })
employeRoute.route('/getemploye/:id').get((req, res) => {
  employeModel.findById(req.params.id, {},(error, data) => {
    if (error) {
      console.log(error)
      return next(error)
    } else {
      res.json(data)
    }
  })
})




// Update employee
employeRoute.route('/updateemploye/:id').put((req, res, next) => {
  employeModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
// Delete employee
employeRoute.route('/deleteemploye/:id').delete((req, res, next) => {
  employeModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: ('data deleted successfully')
      
      })
    }
  })
});

module.exports = employeRoute;