import FavoritePokemon, { NoFavorites } from "@/components/pokemon/FavoritePokemon";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
 title: 'Favoritos - Listado de Pokemons',
 description: 'Listado de Pokemons favoritos',
};

const PokemonsPage = async () => {

  return (
    <div className="flex flex-col">

        <span className="text-5xl my-6 font-semibold">Pokemons Favoritos<br /><small className="text-slate-500 text-md">Global State</small></span>

        <FavoritePokemon />
        
    </div>
  )
}

export default PokemonsPage