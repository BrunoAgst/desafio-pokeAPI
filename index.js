require('dotenv').config();

const express = require('express');
const app = express();
const bodyPaser = require('body-parser');

const mainController = require('./controller/Main');

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyPaser.urlencoded({extended: false}));
app.use(bodyPaser.json());

app.use('/', mainController);

app.listen('3000', () => {
    console.log('servidor ok');
});