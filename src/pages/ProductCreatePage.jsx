import React, { useId, useRef, Form, useState } from 'react'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, TextareaAutosize, Typography } from '@mui/material';

import { dataCategories } from '../data/dataCategories';
import { useForm } from '../hooks/useForm';

export const ProductCreatePage = () => {

  const titleUseId    = useId();
  const categoryUseId = useId();
  const priceUseId    = useId();
  const detailUseId   = useId();
  const titleRef      = useRef(null);
  const categoryRef   = useRef(null);
  const priceRef      = useRef(null);
  const detailRef     = useRef(null);

  const { form, onChangeForm } = useForm();
  const [category, setCategory] = useState('Remeras');

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
    onChangeForm(e.target.value, categoryRef.current.name)
  }

  return (
    <>
      <Box paddingBottom={5}>
        <Typography variant='h5'> Agregar Productos</Typography>
      </Box>

      <form>
          <Box spacing={3} marginBottom={3}>
            <Grid container spacing={2} maxWidth={'100%'} mb={3}>
              <Grid item xs={12} md={6}>
                  <TextField 
                    ref={titleRef}
                    fullWidth 
                    label='titulo' 
                    id={titleUseId} 
                    name='title'
                    onChange={
                      (e) => onChangeForm(e.target.value, titleRef.current.name)
                    }
                  />
              </Grid>
            </Grid>

            <Grid container spacing={2} maxWidth={'100%'} mb={3}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id={categoryUseId}>Categoria</InputLabel>
                  <Select
                    ref={categoryRef}
                    fullWidth
                    labelId={categoryUseId}
                    id={categoryUseId}
                    label="Categoria"
                    value={category}
                    onChange={onChangeCategory}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    { dataCategories.map( (item) => (
                      <MenuItem key={item.id} value={item.category}>{ item.category }</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
        
            <Grid container spacing={2} maxWidth={'100%'} mb={3}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <TextField 
                    ref={priceRef}
                    type='text' 
                    label="Precio" 
                    id={priceUseId}
                    name='price' 
                    onChange={(e) => onChangeForm(e.target.value, priceRef.current.name)}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={2} maxWidth={'100%'} mb={3}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <TextField 
                    ref={detailRef}
                    rows={7} 
                    multiline  
                    label="Detalle" 
                    id={detailUseId}
                    name='detail' 
                    onChange={(e) => onChangeForm(e.target.value, detailRef.current.name)}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={2} maxWidth={'100%'} mb={3}>
              <Grid item xs={12} md={6}>
                <Button type='submit' variant='contained' size='lg' color='primary'>Guardar</Button>
              </Grid>
            </Grid>
          </Box>
      </form>
    </>
  )
}
