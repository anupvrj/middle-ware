const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5100

// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv

const myLogger = (req , res , next)=>{
// middleware code here
console.log("Middle is Logged")
next();
}

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')



})

app.get('/about' ,myLogger, (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))