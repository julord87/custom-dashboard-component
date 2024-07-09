import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SimplePokemon } from '../../../interfaces';

interface PokemonsState {
    [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
    '1': { id: '1', name: 'bulbasaur' },
    '2': { id: '2', name: 'ivysaur' },
    '3': { id: '3', name: 'venusaur' },
    '4': { id: '4', name: 'charmander' },
    '5': { id: '5', name: 'charmeleon' },
    '6': { id: '6', name: 'charizard' },
    '7': { id: '7', name: 'squirtle' },
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
        }
    }
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
