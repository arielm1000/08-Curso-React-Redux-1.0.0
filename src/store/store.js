import {configureStore} from '@reduxjs/toolkit';
import { productSlice } from '../slice/products/productSlice';
import { authSlice } from '../slice/authSlice';

export const store = configureStore({

    reducer:{
        products: productSlice.reducer,  //todas las acciones y state del reducer slice 
        auth: authSlice.reducer
    }
});
