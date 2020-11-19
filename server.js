//Use Express middleware to manage incoming requests and 
//dispatch them to corresponding behaviours
const express = require('express');

//Use chalk to add colours on the console
const chalk = require('chalk');

//to access form data
let bodyParser = require('body-parser');

//The 404 middleware used when an incoming request
//hits a wrong route
const http404 = require('./middleware/route404');

//Access the path 
const path = require('path');

//Used for logging
const morgan = require("morgan");

const cors = require("cors");

//Add more logging
const {loggers, transports, format} = require("winston");

//Accessing MongoDB
const mongoose = require('mongoose');

//Create an application 
const app = express();

app.use(cors());

//used to fetch the data from forms on HTTP POST, and PUT
app.use(bodyParser.urlencoded({

    extended : true
  
  }));
  
app.use(bodyParser.json());
  
//Use the morgan logging 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

//Define the loggers for Winston

loggers.add('infoLogger', {
    level: 'info',
    transports: [new transports.File({ filename: path.join(__dirname, 'logs/info.log')})],
    format: format.printf((info) => {
      let message = `${new Date(Date.now()).toUTCString()} | ${info.level.toUpperCase()}  | ${info.message}`
      return message
    })
});

loggers.add('errorLogger', {
    level: 'error',
    transports: [new transports.File({ filename: path.join(__dirname, 'logs/error.log')})],
    format: format.printf((info) => {
      let message = `${new Date(Date.now()).toUTCString()} | ${info.level.toUpperCase()}  | ${info.message}`
      return message
    })
});

const infoLogger = loggers.get('infoLogger');
//ligne forunie par atlas pour faire la connexion à la base de données 
const uri = "mongodb+srv://dbUser:DydSWaVQZ9Ax4uZM@cluster0.bjnju.mongodb.net/Pizzeria?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log(chalk.green("MongoDB Connected…"));
})
.catch(err => console.log(err))


//Accessing the routes for the pizza
const pizzaRoutes = require('./routes/pizza');

//Accessing the routes for the user
const userRoutes = require('./routes/user');

//Accessing the routes for the orders
const orderRoutes = require('./routes/order');

//Acces the routes 
app.use(pizzaRoutes);

//Acces the routes 
app.use(userRoutes);

//Acces the routes 
app.use(orderRoutes);

//When there is no route that caught the incoming request
//use the 404 middleware
app.use(http404.notFound);

//Listen on the port 3001
app.listen(process.env.PORT || 3001, () => {
    //Add info to the loggers
    infoLogger.info('Server is running on port: 3001');

});

//Print out where the server is
console.log(chalk.green("Server is running on port: 3001"));