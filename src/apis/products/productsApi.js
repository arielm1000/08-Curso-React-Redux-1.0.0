import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/',
    }),

    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products'
        }),

        getProductsById: builder.query({
            query: (id) => `products/${id}`
        })
    })
})

export const {
    useGetProductsQuery,
    useGetProductsByIdQuery
} = productsApi;