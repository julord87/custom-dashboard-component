import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SimplePokemon } from '../../../interfaces';

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon };
}

const getInitialState = () => {
    if( typeof localStorage === 'undefined' ) return {};
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : {};
}

const initialState: PokemonsState = {
    favorites: {},
};

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
            state.favorites = {
                ...state.favorites,
                ...action.payload
            };
        },
        toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
            const pokemon = action.payload;
            const { id } = pokemon;
            if (state.favorites[id]) {
                delete state.favorites[id];
            } else {
                state.favorites[id] = pokemon;
            }

            //TODO: lo siguiente no se debe de hacer en Redux
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        }
    }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
