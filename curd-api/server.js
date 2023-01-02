 const createError = require('http-errors');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
path = require('path');

//mongodb database url 
const database = "mongodb://127.0.0.1:27017/meancurd"



//created express server

mongoose.Promise = global.Promise;

//conect mongodb database
mongoose.set('strictQuery', true);
mongoose.connect(database, {
    useNewUrlParser : true,
    useUnifiedTopology: true 
}).then(()=>{
    console.log('database is connected')
}),
err => {
    console.log("database is not connected" , err)
}
//express routes
const employeRoute = require('./routes/employe.routes.js');

//enable cors
const app = express();
app.use(cors());

//creating static path
app.use(express.static(path.join(__dirname,'dist/meancurdopreation')))


//converting incoming data to json format

app.use(bodyParser.json())
app.use( bodyParser.urlencoded({
      extended: false,
    }),
  )


//routes config
app.use('/api',employeRoute);

//port
const port = process.env.PORT || 4000;
app.listen(4000,()=>
{
   console.log("serer is running!")
})


// Find 404 and hand over to error handler
app.use((req, res, next) => {
    next(createError(404));
    next();
  });

// //base route
app.get('/',(req,res)=>{
    res.send("invalid Endpoint")
});

app.get('*',(req,res)=>{

    res.sendFile(path.join(__dirname,'dist/meancurdoperation/index.html' ))
});


// error handler

app.use(function (error, req, res, next) {
    console.error(error.message) ;
    if (!error.statusCode) error.statusCode = 500; 
    res.status(error.statusCode).send(error.message) 
  });













