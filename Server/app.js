const express = require("express");
const app=express();
const mysql = require("mysql2");
const cors=require("cors");
require("./db/conn")
const customerRouter=require("./Router/customerRouter");
const bookingRouter=require("./Router/bookingRouter");


const port = process.env.PORT || 3001;
// Middleware
app.use(express.json());
app.use(cors());

app.use(customerRouter);
app.use(bookingRouter);


app.listen(port, ()=>{
    console.log(`server strat at port number is ${port}`)
})

