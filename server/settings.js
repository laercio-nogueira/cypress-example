
const mustacheExpress = require('mustache-express');
const express = require('express');
const path = require("path")
const app = express()

app.set('view engine', 'ejs');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.use('/js', express.static(path.resolve('./public/js')))
app.use('/img', express.static(path.resolve('./public/img')))
app.use('/fonts', express.static(path.resolve('./public/fonts')))
app.use('/css', express.static(path.resolve('./public/css')))
app.set('views', __dirname + '/views');

module.exports = app
