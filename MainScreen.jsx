import React from 'react';
import { Button, TextField, Grid, Container } from '@mui/material';

const MainScreen = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}><TextField label="Tabs" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Text Field" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Combo Box" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Navigation Buttons" name="" fullWidth /></Grid>
        <Grid item><Button variant='contained' color='primary'>Next</Button></Grid>
        <Grid item><Button variant='contained' color='primary'>Previous</Button></Grid>
      </Grid>
    </Container>
  );
};

export default MainScreen;