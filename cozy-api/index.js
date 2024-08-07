import express from 'express'
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from './routes/user.route.js'
const app = express()

app.use(express.json())

dotenv.config()

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})

app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO)
    .then(()=>console.log('MongoDB is connected'))
    .catch(error=> console.log(error))


app.use((err, req, res, next)=>{
    const statusCode =  err.statusCode || 500
    const message =  err.message || 'Internet Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

