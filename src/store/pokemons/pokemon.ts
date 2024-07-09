import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SimplePokemon } from '../../../interfaces';

interface PokemonsState {
    [key: string]: SimplePokemon;
}

const getInitialState = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : {};
}

const initialState: PokemonsState = {
    ...getInitialState()
};

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
            const pokemon = action.payload;
            const { id } = pokemon;
            if (state[id]) {
                delete state[id];
            } else {
                state[id] = pokemon;
            }

            //TODO: lo siguiente no se debe de hacer en Redux
            localStorage.setItem('favorites', JSON.stringify(state));
        }
    }
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
