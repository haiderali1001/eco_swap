import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardSample from './components/CardSample';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Footer from './components/Footer';


const Item = styled(Paper)(() => ({
  padding: 8,
  textAlign: 'center',
  color: 'black',
}));

const CardShowcase =  ()=>{
  return (<>
    <Grid container spacing={4}>

    <Grid item xs={3}>
      <Item elevation={0}><img src="/mask-group-1@2x.png" className="tripimage" /></Item>
    </Grid>

    <Grid item xs={3}>
      <Item elevation={0}><img src="/iphone.png" className="tripimage" /></Item>
    </Grid>

    <Grid item xs={3}>
      <Item elevation={0}><img src="/mask-group-2@2x.png" className="tripimage" /></Item>
    </Grid>

    <Grid item xs={3}>
      <Item elevation={0}><img src="/mask-group-2@2x.png" className="tripimage" /></Item>
    </Grid>

    <Grid item xs={3}>
      <Item elevation={0}><img src="/mask-group-2@2x.png" className="tripimage" /></Item>
    </Grid>

    <Grid item xs={3}>
      <Item elevation={0}><img src="/mask-group-2@2x.png" className="tripimage" /></Item>
    </Grid>

    <Grid item xs={3}>
      <Item elevation={0}><img src="/iphone.png" className="tripimage" /></Item>
    </Grid>

    <Grid item xs={3}>
      <Item elevation={0}><img src="/mask-group-2@2x.png" className="tripimage" /></Item>
    </Grid>

    </Grid>
  </>)
}

const Home = () => {
  return (
    <>
    <div className="home">
    <section className="banner-main">
        <div className="banner">
            <div className="banner-sell">
                <p>New Arrivals</p>
                <h1>Discover Our <br/> New Collection</h1>
                <button>Explore</button>
            </div>
        </div>
    </section>
    <section>
        <div className="showcase">
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
    <section>
      <div className="product-showcase">
        <CardShowcase/>
      </div>
    </section>
    </div>
    <Footer/>
    </>
  )
}

export default Home
