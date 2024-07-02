import { PokemonGrid } from "@/components";
import { PokemonsResponse } from "../../../../interfaces/pokemons-response";
import { SimplePokemon } from "../../../../interfaces/simple-pokemons";
import Image from "next/image"


const getPokemons = async (limit: number, offset: number) : Promise<SimplePokemon[]> => {
    const data : PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json())

        const pokemons = data.results.map( pokemon => {
            const id = pokemon.url.split('/')[6]
            return {
                id,
                name: pokemon.name
            }
        })

        return pokemons
}



const PokemonsPage = async () => {

    const pokemons = await getPokemons(151, 0);
    console.log(pokemons)

  return (
    <div className="flex flex-col">

        <span className="text-5xl my-6">Listado de Pokemons<br /><small>estático</small></span>

        <PokemonGrid pokemons={pokemons} />
        
    </div>
  )
}

export default PokemonsPage