const express = require('express');
const router = express.Router();

const pokemonM = require('../models/Pokemon');
const weatherM = require('../models/Weather');


router.get("/", (req, res) => {
    res.render("index");
});

router.get('/result', (req, res) => {
    res.render('result');
});

router.post('/search', async (req, res) => {
    var city = req.body.city;
    
    var cityC = city.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    var weather = await weatherM.getWeather(cityC);

    if(weather.status != 200){
        res.redirect('/'); 
    }

    var main = weather.data.weather[0].main;
    var temp = parseInt(weather.data.main.temp);

    var allpokemon = await pokemonM.pokemonType(temp, main);

    var number = pokemonM.pokemonRandom(allpokemon.length);
    
    var pokemonName = allpokemon[number].pokemon.name;

    var pokemonID = await pokemonM.pokemonID(pokemonName);
    
    res.render("result", { pokemons: pokemonID, mains: main, temps: temp});
});

module.exports = router;



