import { isLoadingProducts, setProducts } from "./productSlice"


export const getProducts = () => {
    return async (dispatch, getState) => {
        dispatch(isLoadingProducts());

        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        dispatch(setProducts({
            isLoading: false,
            data: data
        }));
    }
}