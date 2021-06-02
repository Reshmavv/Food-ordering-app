import {createSlice} from '@reduxjs/toolkit';
const orderListSlice=createSlice({

    name:'order',
    initialState:{
    //     id:{
    //          user:{  
    //         city:'',
    //         name:'',
    //         postalCode:'',
    //         street:'',
    //     },
    //     ordereditems:[{
    //         itemname:'',
    //       price:'',
    //       amount:'',
    //     }],
    // },
       orders:[],
       
  },
    reducers:{
        showOrderList(state,action){
            state.orders=action.payload;
            // state.user.name=action.payload.name;
            // state.user.city=action.payload.city;
            // state.user.postalcode=action.payload.postalcode;
            // state.user.street=action.payload.street;

        },
    }
});


export const orderListActions=orderListSlice.actions;
export default orderListSlice;