const express= require('express');
const ShortUrls=require('./models/urlModels');
const {ConnectDB}=require('./connect');
const router = require('./routes/urlRoutes');

const PORT=8000;
const app=express()
// server.js

app.use('/api/url', router)


ConnectDB().then(()=>{
    console.log("Mongodb database is connected ")
}).catch((err)=>{
    console.log(`database failure: ${err}`)
})




app.listen(PORT,()=>{
    console.log(`the server is running on ${PORT}`);
})