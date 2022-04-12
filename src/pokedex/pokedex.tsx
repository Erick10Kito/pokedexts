import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListPokemons } from "../Pokemon/services/ListPokemons";

interface pokedexProps {}

interface PokemonListInterface {
  name: string;
  url: string;
}

//const pokemonsArray: string[] = []

function getDetailsfromPokemon(pokemon: PokemonListInterface) {}


export const Pokedex: React.FC<pokedexProps> = () => {
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  /* pokemons = Leitura dos dados   |   setPokemons = Modificação dos dados*/
  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonListInterface | undefined
  >(undefined);
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<
    any | undefined
  >(undefined);

  useEffect(() => {
    ListPokemons()
    .then((response) => {
      setPokemons(response.data.results)
    })
     // --> Aqui eu percorri dentro da api e depois determinei o array no qual eu queria que pegasse dentro da api, por isso tem o ""
  }, []); //--> o array esta vazio pois eu quero que ele execurte essa função quando a aplicação for iniciada

  useEffect(() => {
    if (!selectedPokemon) return; // fiz com que se não tivesse pokemon selecionado, o useEffect nao vai continuar

    alert(selectedPokemon.name);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`)
      .then((response) => setSelectedPokemonDetails(response.data));

    //  effect
    //return () => {
    //  cleanup
    // }
  }, [selectedPokemon]); //--> basicamente quando eu coloco algo aqui, eu digo que toda vez que a variavel 'selectedPokemon'(que é a que esta entre os colchetes) mudar, ele vai executar o useEffect novamente
  return (
    <div>
      <h1>Pokedex</h1>

      <h3>Pokemons:</h3>

      {pokemons.map(
        (pokemon) => (
          <button onClick={() => setSelectedPokemon(pokemon)}>
            {pokemon.name}
          </button>
        )

        /*Fiz um map para mapear a lista pokemons, que mais acima foi definida no useState, e no onClick eu coloquei o 'setSelectedPokemon' que é o novo valor a ser colocado em 'SelectedPokemon'
                e dentro do setSelectedPokemon eu coloquei o nome que eu dei para cada elemento dentro de 'pokemons' depois de mapear
                */
      )}

      <h2>
        Pokemon selecionado:{" "}
        {selectedPokemon ? selectedPokemon.name : "Nenhum Pokemon Selecionado"}
      </h2>
      {JSON.stringify(selectedPokemonDetails, undefined, 2)}
    </div>
  );
};

export default Pokedex;
