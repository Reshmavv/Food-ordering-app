import {createSlice} from '@reduxjs/toolkit';

const cartSlice=createSlice({
    name:'cart',
    initialState:{isCheckout:false,isSubmitting:false,didSubmit:false},
    reducers:{
        setIsCheckout(state){
            state.isCheckout=!state.isCheckout;
        },
        setIsSubmitting(state){
            state.isSubmitting=!state.isSubmitting;
        },
        setDidSubmit(state){
            state.didSubmit=!state.didSubmit;
        }
    }

});
export const cartActions=cartSlice.actions;

export default cartSlice;