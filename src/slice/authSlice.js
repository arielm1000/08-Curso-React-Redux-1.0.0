import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        id: 1,
        isloading: false,
        name: 'Ariel medina'
    },
    reducers: {
        login: (state) => {

        },
        logout: (state) => {

        }
    }
});

export const {
    login,
    logout
} = authSlice.actions;