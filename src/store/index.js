import {configureStore} from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import cartSlice from './cart-slice';
import orderSlice from './order-slice';
import orderListSlice from './orderlist-slice';

import orderModalSlice from './orderModalSlice';


const store=configureStore({
    reducer:{ui:uiSlice.reducer,cart:cartSlice.reducer,order:orderSlice.reducer,orderlist:orderListSlice.reducer,ordermodal:orderModalSlice.reducer}

});
export default store;