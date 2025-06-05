async function obtenerNombrePokemones() { 
    
    
    
    //llamada a la api que tiene nombre de pokemones 
    const pokemones = await fetch ('https://pokeapi.co/api/v2');
    const resultado = await pokemones.json()

    const todosLosPokremones = await fetch(resultado.pokemon);
    const mostrarPokemones = await todosLosPokremones.json();
    console.log(mostrarPokemones);

    
    mostrarPokemones.results.forEach(results => {
       const pokemon = results.name;
       if(pokemon == "bulbasaur"){
            document.querySelector('.nombre_pokemon').textContent = pokemon;
       }
    });


    


    
        
        

 }

 obtenerNombrePokemones();