const express=require('express');
const ShortUrls=require('../models/urlModels')
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 10 });

async function handleUrls(req,res){
    const urls = await ShortUrls.find();
    res.render('index.ejs',{
        allUrls:urls,
    })
}

async function handlePostUrls(req,res){
    try {
        const site=req.body.site;
        await ShortUrls.create({ full: site,short: uid.rnd()});
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