import { Routes, Route } from 'react-router-dom';
import { Container, Grid } from "@mui/material"

import { SideBar } from "./components/ui/SideBar"
import { ProductCreatePage } from './pages/ProductCreatePage';
import { ProductPage } from './pages/ProductPage';
import { ProductGalleryPage } from './pages/ProductGalleryPage';



function App() {


  return (
    <>
      <SideBar />
        <Container  maxWidth="lg" style={{  marginTop: 100}}>
          <Routes>
              <Route path='/products' element={ <ProductPage /> } />
              <Route path='/product/add' element={ <ProductCreatePage /> } />
              <Route path='/product/galery' element={ <ProductGalleryPage /> } />
          </Routes>
        </Container>
      
    </>
  )
}

export default App
