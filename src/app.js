const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

//init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
//init db
require('./db/init.mongodb')
//init routes

//handle errors






module.exports = app;