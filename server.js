var cheerio = require('cheerio');
var request = require('request'); 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var axios = require('axios');

var express = require('express');
var app = express();

app.use(logger("dev"));
app.use(
    bodyParser.urlencoded({
        extended:false
    })
);

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("listening on https://localhost:" + port);
});


// request('http://codedemos.com/sampleblog', (error, response, html) => {
//     if (!error && response.statusCode == 200) {
//         const $ = cheerio.load(html);

//         const siteHeading = $('site-heading');

//        //options to fing specific info
       
//         //console.log(siteHeading.html());
//         //console.log(siteHeading.text());
//         // const output = siteHeading.find('h1').text();
//         // const output = siteHeading.children('h1').text();
//         // const output = siteHeading
//         // .children
//         // .next
//         // .text('h1').text();





//     }
// });