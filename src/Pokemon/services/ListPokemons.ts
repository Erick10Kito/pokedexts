import axios from 'axios';

export function ListPokemons() {
    return axios.get("https://pokeapi.co/api/v2/pokemon")
}