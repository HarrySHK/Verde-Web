const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.json())


// const bookRouter = require('./routes/doctor.router')

const UserRouter=require('./routes/user.router')

const DoctorRouter=require('./routes/doctor.router')

app.use('/Doctor',DoctorRouter)

app.use('/User',UserRouter)

// app.use("/api/v1/books", bookRouter)

app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))