import {createSlice} from '@reduxjs/toolkit';

const orderSlice=createSlice({
    name:'order',
    initialState:{
        showOrder:false,
        isOrderLoading:true,
        httpError:'',
        Initial:true,

    reducers:{
        showAllOrders(state){
            state.showOrder=!state.showOrder;
        },
        setIsOrderLoading(state){
            state.isOrderLoading=!state.isOrderLoading;

        },
        setHttpError(state,action){
            state.httpError=action.payload;

        },
        setOrder(state,action){

            state.orders=action.payload;
        },
        setInitial(state){
            state.Initial=!state.Initial;
        },
       
        }
    }

});


export const orderActions=orderSlice.actions;

export default orderSlice;