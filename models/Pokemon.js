const axios = require('axios');


async function getPokemon(type){
    try{
        var response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
        return response.data.pokemon;

    }catch(err){
        return err.message;
    }
}

async function pokemonType(temp, main){
    if(main == 'Rain'){
        return await('eletric');
    }
    else if(temp < 5){
        return await getPokemon('ice');
    }
    else if(temp >= 5 && temp <10){
        return await await getPokemon('water');
    }
    else if(temp >= 12 && temp <= 15){
        return await getPokemon('grass');
    }
    else if(temp >= 15 && temp <= 21){
        return await getPokemon('ground');
    }
    else if(temp >= 23 && temp < 27){
        return await getPokemon('bug');
    }
    else if(temp >= 27 && temp <= 33){
        return await getPokemon('fire');
    }
    else{
        return await getPokemon('normal');
    }
};

function pokemonRandom(total){
    var number = parseInt(Math.random() * (total - 0) + 0);
    return number;
}

async function pokemonID(name){
    var pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${name}`);
    return pokemon.data.id;
}



module.exports = {getPokemon, pokemonType, pokemonRandom, pokemonID};