require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const port = process.env.NODE_PORT | 8000

mongoose.connect('mongodb://localhost/flight_notif_' + process.env.NODE_ENV, ({useNewUrlParser: true}))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

const indexRoute = require('./routes')

app.use('/', indexRoute)

app.listen(port, console.log(`listening on port ${port}`))




// const fetchData = require('./helpers/puppeteer');


// const fetching = fetchData()

// fetching
// .then((data)=> {
//     console.log(data)
// })


