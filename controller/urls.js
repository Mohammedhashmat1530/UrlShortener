const express=require('express');
const ShortUrls=require('../models/urlModels')

async function handleUrls(req,res){
    const urls = await ShortUrls.find();
    console.log(urls);
    res.send("done")
}

module.exports={
    handleUrls,
}