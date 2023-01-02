const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// list of employe schema

let Employe = new Schema({
    id:{
      type:Number
    },
    employename: {
        type:String
    },
    employeemail:{
        type:String
    },
    chooseadate: {
        type: Date
    },
    employeaddress: {
        type: String
    },
    country:{
        type: String
    },

    
},
{
    collection : 'Employe'
}
);

module.exports = mongoose.model('Employe', Employe);