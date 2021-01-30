const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const mongoose = require('mongoose')
const login = require('./router/login')
const post = require('./router/post')
const MongoDB = require('./DB/mongoose')
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//connect to DB
MongoDB();

//login route
app.use('/api/login', login)

//posts route 
app.use('/api/posts', post)


app.listen(port, () => {
    console.log('server started on port 3000')
})