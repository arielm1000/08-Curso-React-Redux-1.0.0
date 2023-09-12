import {MiddlewareArray, configureStore, } from '@reduxjs/toolkit';
import { productSlice } from '../slice/products/productSlice';
import { authSlice } from '../slice/authSlice';
import { productsApi } from '../apis/products/productsApi';

export const store = configureStore({

    reducer:{
        products: productSlice.reducer,  //todas las acciones y state del reducer slice 
        auth: authSlice.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});
