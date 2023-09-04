import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { dataProducts } from '../data/dataProducts';

export const ProductGalleryPage = () => {


  return (
    <Box>
        <Grid container spacing={4}>
        { dataProducts.map((prd) => (
            <Grid key={prd.id} item  xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="div"
                    sx={{
                    // 16:9
                    pt: '100%',
                    }}
                    image={`/productos/${ prd.img }`}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {prd.title}
                    </Typography>
                    <Typography>
                        {prd.detail}
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
