const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const errorMiddleware = require('./middleware/error');
const config = require('./config');

// import routes
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');

// initialize the app
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://192.168.1.40:4000");
  res.header('Access-Control-Allow-Methods', 'GET , PUT , POST , DELETE , OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  next();
});

// middleware
//app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
require('./config/passport')(passport);

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// set routes
// TODO: change to '/user' and '/message'
app.use(`${config.root}/users`, userRoutes);
app.use(`${config.root}/messages`, messageRoutes);

// set error handling middleware
app.use(errorMiddleware);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

module.exports = app;
