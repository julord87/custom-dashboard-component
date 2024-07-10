'use client'

import { useAppSelector } from "@/store"
import PokemonGrid from "./PokemonGrid"
import { useState } from "react"
import { IoHeartOutline } from "react-icons/io5"


const FavoritePokemon = () => {

    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites))
    const [pokemons, setPokemons] = useState(favoritePokemons)

  return (
    <>
        {
            pokemons.length
            ? <PokemonGrid pokemons={pokemons} />
            : <NoFavorites />
        }
    </>
  )
}

export const NoFavorites = () => {
    return (
      <div className="flex flex-row h-[50vh] items-center justify-center">
          <span className="text-2xl my-6 font-semibold text-slate-300">No hay pokemons favoritos</span>
          <IoHeartOutline size={30} className="text-red-200 ml-2" />
      </div>
    )
  }

export default FavoritePokemon