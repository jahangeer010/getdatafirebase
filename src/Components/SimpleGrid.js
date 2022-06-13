import React from 'react'
import Grid from '@mui/material/Grid'
// import { success } from '@mui/material/colors'
export default function SimpleGrid() {
  return (
    <div>
// this is simple grid to design responsive layouts
        <Grid container spacing={2}>
            <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'Green'}}>Block 1</h1></Grid>
            <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'yellow'}}>Block 2</h1></Grid>
            <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'Green'}}>Block 3</h1></Grid>
            <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'yellow'}}>Block 4</h1></Grid>
        </Grid> 
    </div>
  )
}
