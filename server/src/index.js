const express = require('express')
const cors = require('cors')
const dbConnect = require('./connection/dbConnect')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const cartRoute= require('./routes/cart')
const orderRoute= require('./routes/order')
require('dotenv').config()
const app = express()
const Users= require('./model/users')


const port = process.env.PORT || 4000
dbConnect()
//app.use(express.json())
app.use(express.json({limit:'50mb'}))

app.use(cors())
app.use('/',userRoute)
app.use('/',productRoute)
app.use('/',cartRoute)
app.use('/',orderRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
