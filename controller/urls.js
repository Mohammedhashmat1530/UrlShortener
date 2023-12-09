const express=require('express');
const ShortUrls=require('../models/urlModels')

async function handleUrls(req,res){
    const urls = await ShortUrls.find();
    console.log(urls);
    res.send("done")
}

async function handlePostUrls(req,res){
    try {
        await ShortUrls.create({ full: "https://facebook.com" });
        res.redirect('/api/url');
    } catch (error) {
        console.error('Error creating short URL:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function handleDynamicUrls(req,res){
    try{
        const Shorturl=await ShortUrls.findOne({short:req.params.ShortUrl});
        Shorturl.clicks++;
        Shorturl.save();
        res.redirect(Shorturl.full)
    }catch(error){
        console.error('Error creating short URL:', error);
        res.status(500).send('Internal Server Error');
    }
}




module.exports={
    handleUrls,
    handlePostUrls,
    handleDynamicUrls
}