"use client"
import { setFavoritePokemons } from "./pokemons/pokemon"
import { Provider } from "react-redux"
import { store } from "."
import { useEffect } from "react"

interface Props {
    children: React.ReactNode
}

const Providers = ( { children }: Props ) => {

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') ?? '{}');
    store.dispatch(setFavoritePokemons( favorites ));
  }, [])

  return (
    <Provider store={store}>
        { children }
    </Provider>
  )
}

export default Providers