const express = require('express')
const cors = require('cors')
const dbConnect = require('./connection/dbConnect')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')

require('dotenv').config()
const app = express()

const port = process.env.PORT || 4000
dbConnect()
//app.use(express.json())
app.use(express.json({limit:'50mb'}))

app.use(cors())
app.use('/',userRoute)
app.use('/',productRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
