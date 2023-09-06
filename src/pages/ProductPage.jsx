import React from 'react'
import { Button, Container, Grid } from '@mui/material' 
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import { TableGrid } from '../components/tables/TableGrid'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { dataProducts } from '../data/dataProducts';
import { setProducts } from '../slice/products/productSlice';
import { useEffect } from 'react';
import { getProducts } from '../slice/products/thunks';

export const ProductPage = () => {

  const { data } = useSelector( (state) => state.products);
  const auth = useSelector( (state) => state.auth);
  console.log(data);
  console.log(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    //dispatch(setProducts({data: dataProducts}))    
  }, []);
  

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
      <TableGrid dataRows = { data } />
    </Grid>
  )
}
