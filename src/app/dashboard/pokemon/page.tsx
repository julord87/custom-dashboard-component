import { PokemonsResponse } from "./interfaces/pokemons-response";
import { SimplePokemon } from "./interfaces/simple-pokemons";
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
    <div>
        <div className="flex flex-wrap gap-10 items-center justify-center">

            {pokemons.map(pokemon => (
                <div key={pokemon.id}>
                    <Image
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        width={100}
                        height={100}
                        alt={pokemon.name}
                    />
                    <h1>{pokemon.name}</h1>
                </div>
            ))
            }

        </div>
    </div>
  )
}

export default PokemonsPage