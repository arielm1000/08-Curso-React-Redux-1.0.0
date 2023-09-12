import React from 'react'
import { Button, Container, Grid } from '@mui/material' 
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { TableGrid } from '../components/tables/TableGrid'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { dataProducts } from '../data/dataProducts';
import { setProducts } from '../slice/products/productSlice';
import { useEffect } from 'react';
import { getProductById, getProducts } from '../slice/products/thunks';
import { useGetProductsQuery } from '../apis/products/productsApi';

export const ProductPage = () => {

  //const { data, product } = useSelector( (state) => state.products);
  const auth = useSelector( (state) => state.auth);
  //console.log(data);
  console.log(auth);
  const dispatch = useDispatch();
  const { data: products = [], isLoading} = useGetProductsQuery();
  //console.log(data, 'artquery');
  const { data, product } = useSelector( (state) => state.products);

  useEffect(() => {
    //dispatch(getProducts()); //este ya del thunks
    dispatch(setProducts({data: products}));
    //dispatch(getProductById(1)); //este por q async tambien se llama del thunks
  }, [isLoading]);
  

  return (
    <Grid container spacing={2}>
      <Grid item mb={5}>
        <Link to={'/product/add'}>
          <Button 
            variant='contained'
            startIcon={<ProductionQuantityLimitsIcon />} 
          >
            Nuevo Producto
          </Button>
        </Link>
      </Grid>
      <TableGrid 
        dataRows = { data } 
        isLoading = { isLoading }
      />
      {/* <div>{JSON.stringify(product)}</div> */}
    </Grid>
  )
}
