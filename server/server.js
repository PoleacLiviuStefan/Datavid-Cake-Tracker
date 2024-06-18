const express  =  require('express')
const app = express();
const cors = require("cors");
const dotenv = require('dotenv').config()
const router= require('./routers/router')
const mongoose = require("mongoose")
const port= process.env.PORT || 3001;
const mongourl=process.env.MONGO_URL;

const corsOptions = {
    credentials: true,
    origin: "http://localhost:5173", 
};
app.use(express.json());
app.use(cors(corsOptions));
console.log(port)
mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'datavid'
  }).then(()=>{
    console.log("Database is connected");
    app.listen(port, ()=>{
        console.log(`Node API app is running on port ${port}`)
    })
})
    .catch((error)=>{ console.log(error)})
//routes
app.use("/api",router);

