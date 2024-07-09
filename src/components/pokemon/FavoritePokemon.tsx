'use client'

import { useAppSelector } from "@/store"
import PokemonGrid from "./PokemonGrid"
import { useState } from "react"


const FavoritePokemon = () => {

    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons))
    const [pokemons, setPokemons] = useState(favoritePokemons)

  return (
    <PokemonGrid pokemons={pokemons} />
  )
}

export default FavoritePokemon