import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import Grid from '@mui/material/Unstable_Grid2';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardSample from './components/CardSample';

const Home = () => {
  return (
    <>
    <div class="home">
    <section class="banner-main">
        <div class="banner">
            <div class="banner-sell">
                <p>New Arrivals</p>
                <h1>Discover Our <br/> New Collection</h1>
            </div>
        </div>
    </section>
    <section>
        <div class="showcase">
            <h1>Browse The Range</h1>
            <h3>Lorem ipsum</h3>
            <CssBaseline />
            <Container>
              <Box sx={{ m: 1 }}>
                <CardSample/>
              </Box>
            </Container>
        </div>
    </section>
    </div>
    </>
  )
}

export default Home
