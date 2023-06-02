const mysql = require("mysql2");
const express=require("express");

//Database Connection
const conn=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"hproot@5120",
    database:"drone",
});


conn.connect((err)=>{
    if(err) throw err;
    console.log("DB connected")
})

module.exports=conn;


