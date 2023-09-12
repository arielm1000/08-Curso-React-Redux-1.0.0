import { isLoadingProducts, setProduct, setProducts } from "./productSlice"


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

export const getProductById = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();

        console.log(data, 'product x id', id);
        dispatch(setProduct({
            isLoading: false,
            product: data
        }));
    }
}