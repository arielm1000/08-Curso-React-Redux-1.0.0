import {createSlice} from '@reduxjs/toolkit';

const initialProductState = {
    id: 1,
    name: 'Nike Air'

}

export const productSlice = createSlice({
    name: 'products',                   //nombre del reducer
    initialState: initialProductState,  //datos iniciales
    //las distintas acciones
    reducers: {
        createProduct: (state) => {
            //logica
        },

        deleteroduct: (state) => {
            //logica
        }
    },

});

//todas las acciones exportadas que puedo usar
export const {
    createProduct,
    deleteroduct
} = productSlice.actions;