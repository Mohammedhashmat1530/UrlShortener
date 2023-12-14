const express= require('express');
const ShortUrls=require('./models/urlModels');
const {ConnectDB}=require('./connect');
const router = require('./routes/urlRoutes');
const path=require('path');


const PORT=8000;
const app=express()
// server.js
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',async (req,res)=>{
    const urls = await ShortUrls.find();
    console.log(urls);
    res.render('index.ejs',{
        allUrls:urls,
    })
})


app.use('/api/url', router)






ConnectDB().then(()=>{
    console.log("Mongodb database is connected ")
}).catch((err)=>{
    console.log(`database failure: ${err}`)
})




app.listen(PORT,()=>{
    console.log(`the server is running on ${PORT}`);
})