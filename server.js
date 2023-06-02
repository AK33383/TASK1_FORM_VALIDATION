const express = require('express')
const routes = require('./routes/expressroutes.js')

const app = express ()

app.use(express.json())


app.use(routes)





app.listen(3000,(req,res)=>{
    console.log('your app is listening in port 3000')
})

