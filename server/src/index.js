const express = require('express')
const cors = require('cors')
const dbConnect = require('./connection/dbConnect')
const userRoute = require('./routes/user')

require('dotenv').config()
const app = express()

const port = process.env.PORT || 4000
dbConnect()
app.use(express.json())

app.use(cors())
app.use('/',userRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
