import React, { useState } from 'react';

interface pokedexProps {

}

export const pokedex: React.FC<pokedexProps> = () => {

    const [pokemons, setPokemons] = useState([]);
    /* pokemons = Leitura dos dados   |   setPokemons = Modificação dos dados*/
    const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>('Pikachu');


    return (
        <div>
            <h1>Pokedex</h1>



            <h2>Pokemon selecionado: {selectedPokemon}</h2>
        </div>
    );
};

export default pokedex;