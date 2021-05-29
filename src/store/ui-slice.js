import {createSlice} from '@reduxjs/toolkit';

const uiSlice=createSlice({
    name:'ui',
    initialState:{cartIsShown:false},
    reducers:{
        setCartIsShown(state){
            state.cartIsShown=!state.cartIsShown;
        }
    }

});
export const uiActions=uiSlice.actions;

export default uiSlice;