var btnElement = document.getElementById('button');
var inputElement = document.getElementById('city');
var divTemperaturaElement = document.getElementById('temperatura');
var divClimaElement = document.getElementById('clima');
var divPokemonElement = document.getElementById('pokemon');

btnElement.addEventListener('click', function() {

    let cidade = inputElement.value;

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=073308d564dcc16b5dcfbade6ba6af07`;
    let request = new XMLHttpRequest();
    
    request.open('GET', api);

    request.onload = function(){
        let temperaturaCidade = JSON.parse(request.responseText);
        let sky = JSON.parse(request.responseText).weather;
        let clima = localizarClima(sky);
        let valorTemperatura = temperaturaCidade.main.temp;
        
        divTemperaturaElement.innerHTML = valorTemperatura;

        if(clima == 'Rain'){
            divClimaElement.innerHTML = 'Está Chovendo!';
        }else{
            divClimaElement.innerHTML = 'Não Está Chovendo';
        }

        var temperatura;
        function localizarClima (array){
            for(var x in array){
                temperatura = array[x].main;
                return temperatura;
            }
        }
        if(clima === temperatura){
            var api2 = `https://pokeapi.co/api/v2/type/electric`;
        } 
        else if(valorTemperatura < 5){
            var api2 = `https://pokeapi.co/api/v2/type/ice`;
        }       
        else if(valorTemperatura >= 5 && valorTemperatura < 10){
            var api2 = `https://pokeapi.co/api/v2/type/water`;
        }           
        else if(valorTemperatura >= 12 && valorTemperatura <= 15){
            var api2 = `https://pokeapi.co/api/v2/type/grass`;
        }        
        else if(valorTemperatura >= 15 && valorTemperatura <= 21){
            var api2 = `https://pokeapi.co/api/v2/type/ground`;
        }         
        else if(valorTemperatura >= 23 && valorTemperatura <= 27){
            var api2 = `https://pokeapi.co/api/v2/type/bug`;
        }         
        else if(valorTemperatura >= 27 && valorTemperatura <= 33){
            var api2 = `https://pokeapi.co/api/v2/type/rock`;
        }         
        else if(valorTemperatura > 33){
            var api2 = `https://pokeapi.co/api/v2/type/fire`;
        }
        else{
            var api2 = `https://pokeapi.co/api/v2/type/normal`;
        }
                let request2 = new XMLHttpRequest();

                request2.open('GET', api2);

                request2.onload = function(){
                    let namePokemon = JSON.parse(request2.responseText).pokemon;
                    
                    var listaPokemon = [];
            
                    function adicionarPokemon (array){
                        for(var x in array){
                            let p = array[x].pokemon.name;
                            listaPokemon.push(p);
                        }
                    }
            
                    adicionarPokemon(namePokemon);
                    
                    var pokemonAleatorio =  listaPokemon[Math.floor(Math.random()*listaPokemon.length)];
                    divPokemonElement.innerHTML = pokemonAleatorio;
            
                };

                request2.send();
                
            };

    request.send();

});





