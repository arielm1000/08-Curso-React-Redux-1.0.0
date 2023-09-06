import React, {useEffect} from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {useSelector, useDispatch} from 'react-redux';
import { dataProducts } from '../data/dataProducts';
import { getProducts } from '../slice/products/thunks';

export const ProductGalleryPage = () => {

    const { data } = useSelector( (state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProducts());
    }, []);

  return (
    <Box>
        <Grid container spacing={4}>
        { data.map((prd) => (
            <Grid key={prd.id} item  xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="div"
                    sx={{
                    // 16:9
                    pt: '100%',
                    }}
                    image={prd.image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {prd.title}
                    </Typography>
                    <Typography>
                        {prd.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button  
                        size="large" 
                        startIcon={<ThumbUpIcon/>}
                        variant='contained'
                        style={{ justifyContent: 'center', alignContent:'center'}}
                    >
                        0
                    </Button>
                </CardActions>
                </Card>
            </Grid>
        ))}
        </Grid>
    </Box>
  )
}
