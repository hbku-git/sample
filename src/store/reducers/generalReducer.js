import {createSlice} from '@reduxjs/toolkit'

export const generalSlice = createSlice({
    name: 'general',
    initialState: {
        title: 'Innovation Center',
        titleSEO : 'Innovation Center'
    },
    reducers: {
        changeTitle: (state, action) => {
            state.title = action.payload

        },
        changeTitleSEO: (state, action) => {
            state.titleSEO = action.payload
        },
    }
});

export const {changeTitle,changeTitleSEO} = generalSlice.actions;


export const generalSelector = state => state.general;

export default generalSlice.reducer;
