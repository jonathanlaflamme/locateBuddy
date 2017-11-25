require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const routes = require('./routes')


var app = express()

app.use('/', routes)


const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
)

const Users = sequelize.import(__dirname + './app/models/Users');



app.listen(process.env.PORT)
