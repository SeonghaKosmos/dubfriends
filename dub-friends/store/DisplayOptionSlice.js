import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    options: ['interests', 'three words', 'one sentence'],
    selected: 0
}

const DisplayOptionSlice = createSlice({
    name:'DisplayOption',
    initialState,
    reducers: {
        switchOption(state, action) {
            if (state.selected < 2){
                state.selected = state.selected + 1
            } else {
                state.selected = 0
            }

        },
    }
})

export default DisplayOptionSlice

