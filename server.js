var cheerio = require('cheerio');
var request = require('request'); 
var bodyParser = require('bodyParser');
var mongoose = require('mongoose');
var logger = require('logger');
var exphbs = require('express-handlebars');
var axios = rewuire('axios');

request('http://codedemos.com/sampleblog', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const siteHeading = $('site-heading');

       //options to fing specific info
       
        //console.log(siteHeading.html());
        //console.log(siteHeading.text());
        // const output = siteHeading.find('h1').text();
        // const output = siteHeading.children('h1').text();
        // const output = siteHeading
        // .children
        // .next
        // .text('h1').text();





    }
});