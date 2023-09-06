import {createSlice} from '@reduxjs/toolkit';

const initialProductState = {
    isLoading: false,
    data: []
}

export const productSlice = createSlice({
    name: 'products',                   //nombre del reducer
    initialState: initialProductState,  //datos iniciales
    //las distintas acciones
    reducers: {
        isLoadingProducts: (state) => {
            state.isLoading = true //logica
        },
        setProducts: (state, action) => {
            state.isLoading = false , //logica
            state.data = action.payload.data
        }
    },
});
//todas las acciones exportadas que puedo usar
export const {
    isLoadingProducts,
    setProducts
} = productSlice.actions;