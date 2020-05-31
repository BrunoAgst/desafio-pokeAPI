const axios = require('axios');
const id = process.env.weatherID;

async function getWeather(city) {
    try{
        return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${id}`);

    }catch(err){
        return err.response;
        
    }
}

module.exports = {getWeather};