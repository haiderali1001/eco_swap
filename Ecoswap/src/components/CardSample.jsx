import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './CardSample.css'

function CardSample() {

  const Item = styled(Paper)(() => ({
    padding: 8,
    textAlign: 'center',
    color: 'black',
  }));

  return (
    <>
      <Grid container spacing={4}>

        <Grid item xs={4}>
          <Item elevation={0}><img src="/mask-group-1@2x.png" className="tripimage" /></Item>
        </Grid>

        <Grid item xs={4}>
          <Item elevation={0}><img src="/iphone.png" className="tripimage" /></Item>
        </Grid>

        <Grid item xs={4}>
          <Item elevation={0}><img src="/mask-group-2@2x.png" className="tripimage" /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item elevation={0}><h2>Electronics</h2></Item>
        </Grid>

        <Grid item xs={4}>
          <Item elevation={0}><h2>Tech Products</h2></Item>
        </Grid>

        <Grid item xs={4}>
          <Item elevation={0}><h2>Furniture</h2></Item>
        </Grid>
      </Grid>
    </>
  )
}

export default CardSample;