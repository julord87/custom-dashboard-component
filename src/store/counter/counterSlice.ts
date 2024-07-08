import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
    count: number
}

const initialState : CounterState = {
    count: 0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {

    initCounterState(state, action: PayloadAction<number>) {
        if(action.payload < 0) action.payload = 0

        state.count = action.payload
    },

    increment(state) {
        state.count += 1
    },

    decrement(state) {
        if (state.count > 0)
        state.count -= 1
    },

    reset(state, action: PayloadAction<number>) {
        state.count = 0
    }
  }
});

export const {increment, decrement, reset, initCounterState} = counterSlice.actions

export default counterSlice.reducer
