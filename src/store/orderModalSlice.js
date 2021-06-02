import {createSlice} from '@reduxjs/toolkit';

const orderModalSlice=createSlice({
    name:'ordermodal',
    initialState:{
       showModal:false,
       closeModal:true,
    },
    reducers:{
        setShowModal(state,action){
            state.showModal=!state.showModal;

        },
        setCloseModal(state,action){
            state.closeModal=!state.closeModal;
        }
       
        }
    

});


export const orderModalActions=orderModalSlice.actions;

export default orderModalSlice;