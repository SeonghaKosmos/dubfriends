import {configureStore } from '@reduxjs/toolkit'
import DisplayOptionSlice from './DisplayOptionSlice'




let store = configureStore({
    reducer: {
        DisplayOption
    : DisplayOptionSlice.reducer
    } 
})


export const DisplayOptionSliceActions = DisplayOptionSlice.actions
export default store