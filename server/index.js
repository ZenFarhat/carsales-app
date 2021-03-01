import express from 'express'
const app = express()
const PORT = process.env.PORT || 5000
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'


app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
import adRoutes from './routes/ads.js'

app.use(cors())

app.use('/ads', adRoutes)



const CONNECTION_URL = 'mongodb+srv://zen-admin:zen-admin@cluster0.h5ygf.mongodb.net/carsDatabase?retryWrites=true&w=majority'



mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));



  mongoose.set('useFindAndModify', false);